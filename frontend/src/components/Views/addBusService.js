import React , {useState } from 'react'
import axios from 'axios'
import { CusHeader } from '../Header/CusHeader';
import {Container , Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Footer } from '../Footer/Footer';


export default function AddBusService() {



    const [BusServiceName, setBusServiceName] = useState("");
    const [BusNumber, setBusNumber] = useState("");
    const [BusType, setBusType] = useState("");
    const [RouteNumber , setRouteNumber] = useState ("");
    const [DepartureTime , setDepartureTime] = useState ("");
    const [JourneyTime , setJourneyTime] = useState ("");
    const [RestStops , setRestStops] = useState ("");
    const [AirCondition, setAirCondition] = useState("");
    const [WiFi, setWiFi] = useState("");
    const [ChargingPlugs, setChargingPlugs] = useState("");

    function sendData(e){
        e.preventDefault();
      
        // console.log("Date.....",Date);

 
        const newBusService={
            BusNumber,
            BusServiceName,
            BusType,
            RouteNumber,
            DepartureTime,
            JourneyTime,
            RestStops,
            AirCondition,
            WiFi,
            ChargingPlugs
           
        }
            console.log("new Bus Service",newBusService);

        axios.post(`http://localhost:8070/busService/addBusService`,newBusService).then(()=>{

        alert("Bus Service Added")
       
        window.location.replace("/main/busservice");

    }).catch((err)=>{
        alert(err)
    })
    
    }

  return (
    <div>
        <div>  
        <CusHeader/>
        <br></br>
        <br></br>
        <br></br>

        

        <Row >
        <Col md={{ span: 6, offset: 3 }}>

        <Form onSubmit={sendData} className='form-reg'>
            <h4 className='reg'> Add Bus Service  </h4>
      
        <Form.Group className="mb-3" controlId="formBasicBusNumber">
        <Form.Label>BusNumber</Form.Label>
        <Form.Control type="BusNumber" placeholder="BusNumber"
        onChange={(e)=>{
            setBusNumber(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
  

      <Form.Group className="mb-3" controlId="formBasicBusServiceName">
        <Form.Label>BusServiceName</Form.Label>
        <Form.Control type="BusServiceName" placeholder="BusServiceName"
          onChange={(e)=>{
            setBusServiceName(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicBusType">
        <Form.Label>BusType</Form.Label>
        <Form.Control type="type" placeholder="BusType"
        
        onChange={(e)=>{
            setBusType(e.target.value);  //asign values
        }}
        
        required/>
        </Form.Group>

        <Row>
        <Col>

        <Form.Group className="mb-3" controlId="formBasicRouteNumber">
        <Form.Label>RouteNumber</Form.Label>
        <Form.Control type="text" placeholder="RouteNumber"
        
        onChange={(e)=>{
            setRouteNumber(e.target.value);  //asign values
        }}
        required/>
      </Form.Group>

        </Col>

        <Col>

        <Form.Group className="mb-3" controlId="formBasicDepartureTime">
        <Form.Label>DepartureTime</Form.Label>
        <Form.Control type="Time" placeholder="DepartureTime" 
         onChange={(e)=>{
            setDepartureTime(e.target.value);  //asign values
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
      <Form.Group className="mb-3" controlId="formBasicJourneyTime">
        <Form.Label>JourneyTime</Form.Label>
        <Form.Control type="Time" 
         onChange={(e)=>{
            setJourneyTime(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
      </Col>
        <Col>
      <Form.Group className="mb-3" controlId="formBasicTRestStops">
        <Form.Label>RestStops</Form.Label>
        <Form.Control type="RestStops" placeholder="RestStops" 
         onChange={(e)=>{
            setRestStops(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>
      </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicAirCondition">
        <Form.Label>AirCondition</Form.Label>
        <Form.Control type="AirCondition" placeholder="AirCondition " 
          onChange={(e)=>{
            setAirCondition(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWiFi">
        <Form.Label>WiFi</Form.Label>
        <Form.Control type="text" placeholder="WiFi " 
          onChange={(e)=>{
            setWiFi(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicChargingPlugs">
        <Form.Label>ChargingPlugs</Form.Label>
        <Form.Control type="text" placeholder="ChargingPlugs " 
          onChange={(e)=>{
            setChargingPlugs(e.target.value);  //asign values
        }}
        
        required/>
      </Form.Group>

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
