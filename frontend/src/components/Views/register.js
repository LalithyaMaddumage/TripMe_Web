import React, {useState} from 'react'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Register() {

  //Asign and set variables
  const[Name,setName] = useState("");
  const[Address,setAddress] = useState("");
  const[Phone,setPhone] = useState("");
  const[Email,setEmail] = useState("");
  const[NIC,setNIC] = useState("");
  const[Password,setPassword] = useState("");

  let history = useHistory();

  function sendData(e){
    e.preventDefault();

    const newTraveller = {
      Name,
      Address,
      Phone,
      Email,
      NIC,
      Password
    }

    //Add data to local traveller table
    axios.post("http://localhost:8070/traveller/addLocalT",newTraveller).then(()=>{
            alert("New Traveller Added")
            history.push("/main/login")
        }).catch((err)=>{
            alert(err)
        })
    
  }

  return (
    <div>  
        <Header/>
        <br></br>
        <br></br>
        <br></br>

        

        <Row >
        <Col md={{ span: 6, offset: 3 }}>
            


        <Form  className='form-reg' onSubmit={sendData}>
            <h4 className='reg'> Customer Registeration  </h4>

        {/* Asign Name */}
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="name" 
          placeholder="Name" 
          required
          onChange={(e)=>{
            setName(e.target.value);//Asign value
          }}
          />
      </Form.Group>
      
      {/* Asign Address */}
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control 
          type="address" 
          placeholder="Adress" 
          required
          onChange={(e)=>{
            setAddress(e.target.value);//Asign value
          }}
          />
      </Form.Group>

      {/* Asign Phone no */}
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="phone" 
          placeholder="Phone" 
          required
          onChange={(e)=>{
            setPhone(e.target.value);//Asign value
          }}
          />
      </Form.Group>

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


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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

      {/* Asign NIC */}
      <Form.Group className="mb-3" controlId="formBasicNIC">
        <Form.Label>NIC</Form.Label>
        <Form.Control 
          type="nic" 
          placeholder="NIC" 
          required
          onChange={(e)=>{
            setNIC(e.target.value);//Asign value
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
  )
}

export default Register