import React, { useState } from 'react'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ForeignRegister() {

  const[Name,setName] = useState("");
  const[Phone,setPhone] = useState("");
  const[Email,setEmail] = useState("");
  const[PassportNo,setPassportNo] = useState("");
  const[Password,setPassword] = useState("");

  function sendData(e){
    e.preventDefault();

    const newForigner = {
      Name,
      Phone,
      Email,
      PassportNo,
      Password
    }

    axios.post("http://localhost:8070/traveller/addForeignT",newForigner).then(()=>{
            alert("New Foreigner Added")
            window.location.reload();
        }).catch((err)=>{
            alert(err)
        })
    
  }

  return (
    <div>
         <div>  
        <Header/>
        <br></br>
        <br></br>
        <br></br>

        

        <Row >
        <Col md={{ span: 6, offset: 3 }}>
            


        <Form  className='form-reg' onSubmit={sendData}>
            <h4 className='reg'> Foriegn Customer Registeration  </h4>

            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="name" 
          placeholder="Name" 
          required
          onChange={(e)=>{
            setName(e.target.value);
          }}
        />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Adress" required/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="phone" 
          placeholder="Phone" 
          required
          onChange={(e)=>{
            setPhone(e.target.value);
          }}
          />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          required
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          />


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>


      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Enter Password" 
          required
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassport">
        <Form.Label>Passport</Form.Label>
        <Form.Control 
          type="passport" 
          placeholder="Passport" 
          required
          onChange={(e)=>{
            setPassportNo(e.target.value);
          }}
          />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group>


      <Button className='reg-btn' variant="success" type="submit">
        Register
      </Button>
    </Form>
        
        
        </Col>
      </Row>

       


    </div>
    </div>
  )
}

export default ForeignRegister

