import React from 'react'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Register() {
  return (
    <div>  
        <Header/>
        <br></br>
        <br></br>
        <br></br>

        

        <Row >
        <Col md={{ span: 6, offset: 3 }}>
            


        <Form  className='form-reg'>
            <h4 className='reg'> Customer Registeration  </h4>

            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Adress" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="Phone" required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>


      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNIC">
        <Form.Label>NIC</Form.Label>
        <Form.Control type="nic" placeholder="NIC" required/>
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