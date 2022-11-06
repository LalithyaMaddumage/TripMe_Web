import React, { useEffect,useState} from 'react'
import {Container , Row , Col,Card,Form,Button} from 'react-bootstrap';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import axios from 'axios';
import {Modal} from "react-bootstrap";
// import UpdateForeigner from './updateForeigner';


function UpdateForeigner() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [PassportNo, setPassportNo] = useState("");
  const [Password, setPassword] = useState("");
  const [type, setType] = useState("");




  const win = window.sessionStorage;

  const loadData = () =>{
    axios.get(`http://localhost:8070/traveller/getTraveller/${type}/${Email}`).then((response)=>{
      console.log(response.data);
      setName(response.data.Name);
      setPhone(response.data.Phone);
      setPassportNo(response.data.PassportNo);
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


const handleSubmit = () =>{
    console.log("awa")
    
    const updateForeigner = {
        Name,
        Phone,
        Email,
        PassportNo
    }

    axios.put(`http://localhost:8070/traveller/updateTraveller/${type}/${Email}`,updateForeigner).then((response)=>{
        alert("Foreign Passenger Details Updated Successfully!");
        window.location.reload(true);
    }).catch((err)=>{
        console.log(err)
        alert("Error occured !");
    });

 }
// function handleSubmit(){

  

//     const updateForeigner = {
//         Name,
//         Phone,
//         Email,
//         PassportNo
//     }

//     axios.put(`http://localhost:8070/traveller/updateTraveller/${type}/${Email}`,updateForeigner).then((response)=>{
//         alert("Foreign Passenger Details Updated Successfully!");
//         window.location.reload(true);
//     }).catch((err)=>{
//         console.log(err)
//         alert("Error occured !");
//     });
// };


  return (
    

    <div>

        <Header/>
        <br></br>
        <br></br>
        <br></br>

    <Row  >
        <Col md={{ span: 6, offset: 3 }}>

    <Card border="success" >
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>UPDATE PROFILE</Card.Title>
          <Card.Text>


            <Form className='form-reg' onSubmit={handleSubmit}>
              {}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Name
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="name" placeholder="Name" value={Name}
        onChange={(e)=>{
            setName(e.target.value);
          }}
        />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
       Phone Number
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="phone" placeholder="Phone"  value={Phone}
        onChange={(e)=>{
            setPhone(e.target.value);
          }}
        />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Email address
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="email" placeholder="Enter email"  value={Email}
        onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Passport
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="passport" placeholder="Passport"  value={PassportNo}
        onChange={(e)=>{
            setPassportNo(e.target.value);
          }}
        />
        </Col>
      </Form.Group>

    


      <Form.Group as={Row} className="mb-3">
        <Col sm={2}>
         
        </Col>
        
        <Col >
        <Button 
          variant="warning" 
          type="submit"
            onSubmit={()=>{
                console.log("handlesubmit");
                handleSubmit();
            }}
          >
            Update
        </Button> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        
        <Button variant="danger" type="submit">Delete Account</Button>
        </Col>
        <Col sm={2}>
        </Col>
      </Form.Group>
    </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>

      <br/><br/><br/>
                
      <Footer/>

    </div>
  )
}

export default UpdateForeigner;