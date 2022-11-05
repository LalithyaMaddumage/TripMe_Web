import React, { useEffect,useState} from 'react'
import {Container , Row , Col,Card,Form,Button} from 'react-bootstrap';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import axios from 'axios';


function ViewForeign() {
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
              {}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Name
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="name" placeholder="Name" value={Name} disabled/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
       Phone Number
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="phone" placeholder="Phone" disabled value={Phone}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Email address
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="email" placeholder="Enter email" disabled value={Email}/>
        {}
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        Passport
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="passport" placeholder="Passport" disabled value={PassportNo}/>
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

      <br/><br/><br/>
                
      <Footer/>

    </div>
  )
}

export default ViewForeign;