import React from 'react'
import { FaClock ,FaRegSnowflake  ,FaWifi ,FaChargingStation} from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import {Container , Row , Col ,Card , Button} from 'react-bootstrap';
import { Footer } from '../Footer/Footer'
import { CusHeader } from '../Header/CusHeader'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function BusService() {

  const[busServices, setBusServices] = useState([]);
  useEffect(()=>{
    function getBusServices(){
      axios.get("http://localhost:8070/busService/allBusServices").then((res)=>{
        setBusServices(res.data.reverse());
        console.log("data recieved")
      }).catch((error)=>{
        alert(error.message);
      })
    }
    getBusServices();
  },[]);

  
  return (
    <div>
        <CusHeader></CusHeader>
        <br></br>
    <div style={{textAlign: "left" , marginLeft: "270px"}}>
        <h3> Bus Service Details</h3>

        </div>
        <br></br>
        <Container>
    
      <Row>
        {/* <Col xs={10}>1 of 3</Col> */}
        <Col >
        <Card className="text-center">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>A/C Sleeper (2 in 1)</Card.Title>
        <Card.Text>
         <Row>
            <Col className='busCard'> <FaClock/> &nbsp; Departure Time </Col>
            <Col> 8.30 am</Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
         </Row>
         <Row>
            <Col className='busCard'> <FaClock/> &nbsp; Arrivel Time </Col>
            <Col> 18.30 pm</Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
         </Row>
        </Card.Text>
        <Button variant="outline-success">View Details</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
      <Row className='busCard'>
            <Col > <FaRegSnowflake/> &nbsp; A/C </Col>
            <Col> <FaWifi/> &nbsp; Wifi </Col>
            <Col> <FaChargingStation/> &nbsp; Charging Plug</Col>
            <Col> <BiRestaurant/> &nbsp; Rest Stop 1</Col>
            <Col></Col>
         </Row>
        
        </Card.Footer>
    </Card>
        
        </Col>
        {/* <Col>3 of 3</Col> */}
      </Row>
    </Container>

<br></br>
  
    

        {/* <Footer></Footer> */}
    </div>
  )
}
