import React , {useState ,useEffect } from 'react'
import axios from 'axios'
import { Header } from '../Header/Header';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UpdateBooking({data ,cl}) {

    //Asign and set variables
    const [CustomerName, setCustomerName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email , setEmail] = useState ("");
    const [PickUp , setPickUp] = useState ("");
    const [Destination , setDestination] = useState ("");
    const [Date , setDate] = useState ("");
    const [Time, setTime] = useState("");
    const [BusService, setBusService] = useState("");
    const [Status, setStatus] = useState("");


    useEffect(()=>{

        setCustomerName(data.CustomerName)
        setMobile(data.Mobile)
        setEmail(data.Email)
        setPickUp(data.PickUp)
        setDestination(data.Destination)
        setDate(data.Date)
        setTime(data.Time)
        setBusService(data.BusService)
        setStatus(data.Status)
    
    
      },[])


    function sendData(e){
        e.preventDefault();
      
        console.log("Date.....",Date);

 
        const updateBook={
            CustomerName,
            Mobile,
            Email,
            PickUp,
            Destination,
            Date,
            Time,
            BusService,
            Status
        }
            console.log("new booking",updateBook);
        
        //update data using id
        axios.put(`http://localhost:8070/booking/updatebooking/${data._id}`,updateBook).then(()=>{

        alert("Booking Details Updated Successfully")
       
        window.location.reload();

    }).catch((err)=>{
        alert(err)
    })
    
    }



  return (
    <div>
         <div>  
        {/* <Header/> */}
      

    
        {/* <Col md={{ span: 6, offset: 3 }}> */}

        <Form onSubmit={sendData} className='form-reg'>
            <h4 className='reg'>Update Booking Details  </h4>

        {/* Asign Name */}
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="name" 
        value ={ CustomerName}
        onChange={(e)=>{
            setCustomerName(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group>
  
      {/* Asign phone no */}
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="Phone"
        value={Mobile}
          onChange={(e)=>{
            setMobile(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group>

      {/* Asign Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={Email}
        onChange={(e)=>{
            setEmail(e.target.value);  //asign values
        }}
        
        disabled/>


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Row>
        <Col>

        {/* Asign pickup location */}
        <Form.Group className="mb-3" controlId="formBasicPickUp">
        <Form.Label>Pick Up</Form.Label>
        <Form.Control type="text" placeholder="Pick Up"
        value={PickUp}
        onChange={(e)=>{
            setPickUp(e.target.value);  //asign values
        }}
        disabled/>
      </Form.Group>

        </Col>

        <Col>

        {/* Asign destinaion */}
        <Form.Group className="mb-3" controlId="formBasicDestination">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="Destination" placeholder="Destination" 
        value={Destination}
         onChange={(e)=>{
            setDestination(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group>
        </Col>
        </Row>
   <Row>
   <Col>
   
   </Col>
   </Row>
        
      <Row>
        <Col>
        {/* Asign Date */}
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" 
        value={Date}
         onChange={(e)=>{
            setDate(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group>
      </Col>
        <Col>

        {/* Asign Time */}
      <Form.Group className="mb-3" controlId="formBasicTime">
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" placeholder="Time" 
        value={Time}
         onChange={(e)=>{
            setTime(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group>
      </Col>
      </Row>

      {/* Asign bus service */}
      <Form.Group className="mb-3" controlId="formBasicBusService">
        <Form.Label>Bus Service</Form.Label>
        <Form.Control type="BusService" placeholder="Bus Service " 
          value={BusService}
          onChange={(e)=>{
            setBusService(e.target.value);  //asign values
        }}
        
        disabled/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSelect">
        {/* <Form.Label>Status</Form.Label>
        <Form.Control type="BusService" placeholder="Bus Service " 
          onChange={(e)=>{
            setStatus(e.target.value);  //asign values
        }}
         value ={Status}
        required/> */}
      <Form.Select aria-label="Default select example"
       onChange={(e)=>{
        setStatus(e.target.value);  //asign values
    }}

    required
      >
     
      <option value="Pending">Pending</option>
      <option value="Approved">Approved</option>
      <option value="Rejected">Rejected</option>
     </Form.Select>
      </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group> */}


      <Button className='booking-btn' variant="outline-primary" type="submit">
        Update
      </Button>

      <Button className='booking-cancel-btn' variant="outline-danger" type="submit" onClick={cl}>
        Cancel
      </Button>

      
    </Form>
     

        
        
        {/* </Col> */}
   
      
       


    </div>





    </div>
  )
}
