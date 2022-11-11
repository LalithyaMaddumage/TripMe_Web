import React , {useState } from 'react'
import axios from 'axios'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Footer } from '../Footer/Footer';




export default function AddBooking() {

    const [CustomerName, setCustomerName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email , setEmail] = useState ("");
    const [PickUp , setPickUp] = useState ("");
    const [Destination , setDestination] = useState ("");
    const [Date , setDate] = useState ("");
    const [Time, setTime] = useState("");
    const [BusService, setBusService] = useState("");
    // const [Status, setStatus] = useState("Pendding");



    function sendData(e){
        e.preventDefault();
      
        console.log("Date.....",Date);

 
        const newBook={
            CustomerName,
            Mobile,
            Email,
            PickUp,
            Destination,
            Date,
            Time,
            BusService,
            // Status
        }
            console.log("new booking",newBook);

        axios.post(`http://localhost:8070/booking/addBooking`,newBook).then(()=>{

        alert("booking Added")
       
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

        <Form onSubmit={sendData} className='form-reg'>
            <h4 className='reg'> New Booking  </h4>
      
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="name" placeholder="Name"
        onChange={(e)=>{
            setCustomerName(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
  

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="Phone"
          onChange={(e)=>{
            setMobile(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        
        onChange={(e)=>{
            setEmail(e.target.value);  //asign values
        }}
        
        required/>


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Row>
        <Col>

        <Form.Group className="mb-3" controlId="formBasicPickUp">
        <Form.Label>Pick Up</Form.Label>
        <Form.Control type="text" placeholder="Pick Up"
        
        onChange={(e)=>{
            setPickUp(e.target.value);  //asign values
        }}
        required/>
      </Form.Group>

        </Col>

        <Col>

        <Form.Group className="mb-3" controlId="formBasicDestination">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="Destination" placeholder="Destination" 
         onChange={(e)=>{
            setDestination(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
        </Col>
        </Row>
   <Row>
   <Col>
   
   </Col>
   </Row>
        
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" 
         onChange={(e)=>{
            setDate(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
      </Col>
        <Col>
      <Form.Group className="mb-3" controlId="formBasicTime">
        <Form.Label>Time</Form.Label>
        <Form.Control type="Time" placeholder="Time" 
         onChange={(e)=>{
            setTime(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
      </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicBusService">
        <Form.Label>Bus Service</Form.Label>
        <Form.Control type="BusService" placeholder="Bus Service " 
          onChange={(e)=>{
            setBusService(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicBusService">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" Value="Pendding " 
          onChange={(e)=>{
            setStatus(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group> */}

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group> */}


      <Button className='booking-btn' variant="success" type="submit">
        Add Booking
      </Button>
    </Form>
     

        
        
        </Col>
      </Row>
 <br></br>
       


    </div>


    <Footer></Footer>
    </div>
  )
}
