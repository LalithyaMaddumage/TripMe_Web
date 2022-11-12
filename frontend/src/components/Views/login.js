import React, {useState} from 'react'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {

  //Asign and set variables
  const[Email,setEmail] = useState("");
  const[Password,setPassword] = useState("");
  const[type,setType] = useState("");
  const[login,setLogin] = useState([]);
  
  const win = window.sessionStorage;




  let history = useHistory();


  function checkUser(e){
    e.preventDefault();

    // const newTraveller = {
    //   Name,
    //   Address,
    //   Phone,
    //   Email,
    //   Password,
    //   NIC
    // }

    //validate user
    axios.get(`http://localhost:8070/traveller/getUser/${Email}/${Password}/${type}`).then((response)=>{
            console.log(response.data);
            setLogin(response.data.login);
            if(response.data.login === null){
                alert("User not available")
            }else{
                alert("Success!")
                win.setItem('Email',Email);
                win.setItem('type',type);

                //check for the user type
                if(type == "LocalTraveller"){

                  history.push("/main/viewLocal");

                }else if(type == "ForeignTraveller"){

                  history.push("/main/viewforeign");

                }
            }

        }).catch((err)=>{
            alert(err.response.data.error)
        });
    
  }

  return (
    <div>  
        <Header/>
        <br></br>
        <br></br>
        <br></br>

        

        <Row >
        <Col md={{ span: 6, offset: 3 }}>
            


        <Form  className='form-reg' onSubmit={checkUser}>
            <h4 className='reg'> Login  </h4>

      {/* Asign Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          required
          onChange={(e)=>{
            setEmail(e.target.value);//Asign value
          }}
          />
      </Form.Group>

      {/* Asign Password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Enter Password" 
          required
          onChange={(e)=>{
            setPassword(e.target.value);//Asign value
          }}
          />
      </Form.Group>

      {/* Asign type */}
      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Customer Type</Form.Label>
        <select 
          for="CustomerType"
          className='form-select'
          required
          onChange={(e)=>{
            setType(e.target.value);//Asign value
          }}>
            <option selected disabled value="">Select Customer Type</option>
            <option value="LocalTraveller">Local Passenger</option>
            <option value="ForeignTraveller">Foreign Passenger</option>
          </select>
      </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group> */}


      <Button className='reg-btn' variant="success" type="submit">
        Login
      </Button>
    </Form>
        
        
        </Col>
      </Row>

       


    </div>
  )
}

export default Login