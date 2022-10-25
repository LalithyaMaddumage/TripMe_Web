import React from 'react'
import {Container , Row , Col,Card,Form,Button} from 'react-bootstrap';
import { Header } from '../Header/Header';

function ViewLocal() {
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
          <Card.Title>MY PROFILE</Card.Title>
          <Card.Text>


            <Form className='form-reg'>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Name
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="name" placeholder="Name" disabled/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Address
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="address" placeholder="Adress" disabled/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
       Phone Number
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="phone" placeholder="Phone" disabled/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Email address
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="email" placeholder="Enter email" disabled/>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        NIC
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="nic" placeholder="NIC" disabled/>
        </Col>
      </Form.Group>

    


      <Form.Group as={Row} className="mb-3">
        <Col sm={2}>
         
        </Col>
        <Col >
        <Button variant="warning" type="submit">Edit Account</Button> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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

    </div>
  )
}

export default ViewLocal;