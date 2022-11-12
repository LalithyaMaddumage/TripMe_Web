import React, {useState} from 'react'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {

  //Asign and set variables
  const[UserN,setUser] = useState("");
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

    //Validate username and password
    axios.get(`http://localhost:8070/login/getUser/${UserN}/${Password}`).then((response)=>{
            console.log(response.data);
            setLogin(response.data.login);
            if(response.data.login === null){
                alert("User not available")
            }
            else{
                alert("Success!")
                win.setItem('UserN',UserN);
                win.setItem('type',type);

                  history.push("/main/busService");

                }
            }

        ).catch((err)=>{
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

      {/* Asign Email Address */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="string" 
          placeholder="Enter User Name" 
          required
          onChange={(e)=>{
            setUser(e.target.value);
          }}
          />
      </Form.Group>

      {/* Asign password */}
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