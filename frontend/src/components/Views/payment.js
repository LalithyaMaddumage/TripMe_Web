import React , {useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../Header/Header';
import { Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import { SwipeableDrawer } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function Payments() {

    //variable for setting the amount
    const [Amountt, setAmount] = useState("");
    const [Amount1, setAmount1] = useState("");
   

    //variables for QR code generation
    const [temp, setTemp] = useState("");
    const [temp1, setTemp1] = useState("");
    const [word, setWord] = useState("");
    const [word1, setword1] = useState("");
    const [qrCode, setQrCode] = useState("");

    //Variables for validation
    const [CardNo, setCardNo] = useState("");
    const [CardErr, setCardNoError] = useState("");

    //variables for get data from a different table for the QR code
    const [PassportNo, setPassportNo] = useState("");
    const [Email, setEmail] = useState("");
    const [type, setType] = useState("");

    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");

    const [Address, setAddress] = useState("");
    const [NIC, setNIC] = useState("");

    const win = window.sessionStorage;

    const loadData = () =>{
    
    //fetch data from traveller table according to the logged email
    axios.get(`http://localhost:8070/traveller/getTraveller/${type}/${Email}`).then((response)=>{
      console.log(response.data);
      setName(response.data.Name);
      setPhone(response.data.Phone);
      setPassportNo(response.data.PassportNo);
      setPassword(response.data.Password);
      setAddress(response.data.Address);
      setNIC(response.data.NIC);
      setAmount1(response.data.Amount);
      
    })

    }


    useEffect(() => {   

        if(win.getItem("Email")){
          setEmail(win.getItem("Email"));
         }
         if(win.getItem("type")){
          setType(win.getItem("type"));
         }
         if(Email && type){
          loadData();
         }
      },[type,Email])

    //validate card number function
    const CardValidation = () => {
        const CardErr={}; //State
        let CardValid = true; //setting flag

        if(CardNo.trim().length > 16) {
            CardErr.invalidCardNo = " *Invalid Card Number"; //error msg
            Swal.fire({
                icon: 'error',
                title: 'Oops..Invalid Card Number',
                text: '*Invalid Card Number, Please Try Again !!',
                confirmButtonColor: '#1fc191',
            })
            CardValid = false;
        }else if(CardNo.trim().length <16){
            CardErr.invalidCardNo = " *Invalid Card Number"; //error msg
            Swal.fire({
                icon: 'error',
                title: 'Oops..Invalid Card Number',
                text: '*Invalid Card Number, Please Try Again !!',
                confirmButtonColor: '#1fc191',
            })
            CardValid = false;
        }

        setCardNoError(CardErr);
        return CardValid;
    }
    let history = useHistory();

    function sendData(e){
        e.preventDefault();
        
        //add card details to the payment table
        const CardValid = CardValidation();

        if(CardValid){
            Swal.fire({
                title: "Are you sure you want to confirm submission? ",
                showConfirmButton: true,
                showDenyButton: true,
                confirmButtonText: "Proceed",
                denyButtonText: "Cancel",
                confirmButtonColor: "#1fc191",

            })
            
            //if it is a local traveller
            if(type == "LocalTraveller"){

                const updateLocal = {
                    Name,
                    Phone,
                    Email,
                    NIC,
                    Address,
                    Password,
                    Amountt,
                    Amount1
           
                }
                //add data
                axios.put(`http://localhost:8070/traveller/updateTraveller/${type}/${Email}`,updateLocal).then((response)=>{
                    Swal.fire({
                        title: "Rental Record added successfully! ",
                        icon: 'success',
        
                        confirmButtonColor: "#1fc191",

        
                    }) 
                    history.push("/main/viewLocal")      
                }).catch((err)=>{
                    var error = err.response.data.error
                    Swal.fire({
                        title: "Internal Server Error! ",
                        text: error,
                        icon: 'error',
                        confirmButtonColor: "#1fc191",
                    })
                })

                
              //if it is a foreign traveller
              }else if(type == "ForeignTraveller"){

                const updateForeigner = {
                    Name,
                    Phone,
                    Email,
                    PassportNo,
                    Password,
                    Amountt,
                    Amount1
           
                }
                //add data
                axios.put(`http://localhost:8070/traveller/updateTraveller/${type}/${Email}`,updateForeigner).then((response)=>{
                    Swal.fire({
                        title: "Rental Record added successfully! ",
                        icon: 'success',
        
                        confirmButtonColor: "#1fc191",
        
                    }) 
                    history.push("/main/viewForeign")       
                }).catch((err)=>{
                    var error = err.response.data.error
                    Swal.fire({
                        title: "Internal Server Error! ",
                        text: error,
                        icon: 'error',
                        confirmButtonColor: "#1fc191",
                    })
                })

               

              }
            
       
                   
    }
    
}    

    return (
    <div>
     <div>  
        <Header/>
        <br></br>
        <br></br>
        <br></br>

        
    <div class="col">
    <Row >
    <Col md={{ span: 6, offset: 3 }}>

        <Form onSubmit={sendData} className='form-reg'>
        <h4 className='reg'> Enter Card Details  </h4>

        {/* Asign card no */}
        <Form.Group className="mb-3" controlId="formBasicCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="CardNumber" placeholder="0000-0000-0000-0000"
        onChange={(event) => {
            setCardNo(event.target.value);//validate function calling
           
        }}
        required/>
        </Form.Group>
  
        {/* Asign name */}
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Card Holder Name</Form.Label>
        <Form.Control type="name" placeholder="Name"
        required/>
        </Form.Group>

        <div class="row">
        <div class="col-8 col-md-6">

        {/* Asign cvv code */}
        <Form.Group className="mb-3" controlId="formBasicCVV">
        <Form.Label>CVV</Form.Label>
        <Form.Control type="number" placeholder="cvv"
        
        required/>
        </Form.Group>
        </div>
        
        {/* Asign expire date */}
        <div class="col-8 col-md-6">
        <Form.Group className="mb-3" controlId="formBasicExpireDate">
        <Form.Label>Expire Date</Form.Label>
        <Form.Control type="text" placeholder="02/26"
        
        required/>
        </Form.Group>
        
        </div>
        </div>

        {/* Asign Amount */}
        <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Rs."
          onChange={(e)=>{
            setAmount(e.target.value);//Asign value
        }}
        
        required/>
        </Form.Group>
    
        
        <br/>

        <div align="center">
        <Form.Group className="mb-3" controlId="formBasicExpireDate">
        <Button className='booking-btn' variant="success" type="submit">
            TopUp
        </Button>
        </Form.Group>
        </div>

      <br/><br/>
    </Form>
     

        
        
        </Col>
      </Row>
 <br></br>

 
      
       

 </div>
    </div>
    </div>
    );
}
