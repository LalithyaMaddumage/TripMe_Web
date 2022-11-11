import React , {useState,useEffect} from 'react'
import axios from 'axios';
import { FaClock ,FaRegSnowflake  ,FaWifi ,FaChargingStation} from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import {Container , Row , Col ,Card , Button ,Modal} from 'react-bootstrap';
import { Footer } from '../Footer/Footer'
import { CusHeader } from '../Header/CusHeader'
import UpdateBusService from './updateBusService';


export default function BusService() {
  const[busService,setBusService]=useState([]);
  const [StateUpdate, setStateUpdate] = useState(false)
  const [BusUpdate, setBusServiceUpdate] = useState()

  useEffect(()=>{
    axios.get("http://localhost:8070/busService/allBusServices").then((res)=>{
        console.log(res.data);
        setBusService(res.data);
    }).catch((err)=>{
        alert(err.msg);
    })
      },[])

  return (
    <div>
        <CusHeader></CusHeader>
        <br></br>
    <div style={{textAlign: "left" , marginLeft: "270px"}}>
        <h3> Bus Service Details</h3>

        </div>
        <br></br>

        {busService.map((value)=>(
        <Container style={{marginBottom :"50px"}}>
    
      <Row>
        {/* <Col xs={10}>1 of 3</Col> */}
        <Col >
        <Card className="text-center">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>{value.BusServiceName}</Card.Title>
        <Card.Text>
         <Row>
            <Col className='busCard'> <FaClock/> &nbsp; Departure Time </Col>
            <Col> {value.DepartureTime}</Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
         </Row>
         <Row>
            <Col className='busCard'> <FaClock/> &nbsp; Arrivel Time </Col>
          <Col> {value.JourneyTime}</Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
         </Row>
        </Card.Text>
        <Button variant="outline-success"
         onClick = {() =>{
          setBusServiceUpdate(value); //setTransportDetailswithID
          setStateUpdate(true);

         }}



        //  onClick={ (event, rowData) => {
        //   setBookinUpdate(rowData); //setTransportDetailswithID
        //   setStateUpdate(true); //setStatetrue//setStatetrue
        // }
        >
          View Details</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
      <Row className='busCard'>
            <Col > <FaRegSnowflake/> &nbsp; {value.AirCondition}</Col>
            <Col> <FaWifi/> &nbsp; {value.WiFi} </Col>
            <Col> <FaChargingStation/> &nbsp; {value.ChargingPlugs}</Col>
            <Col> <BiRestaurant/> &nbsp; Rest Stop  &nbsp; {value.RestStops}</Col>
            <Col></Col>
         </Row>
        
        </Card.Footer>
    </Card>
        
        </Col>
        {/* <Col>3 of 3</Col> */}
      </Row>
    </Container>

    )) }

          {/* update modal */}
          <Modal show={StateUpdate} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
          >
                    <Modal.Body>
                        <UpdateBusService data={BusUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
          </Modal>

<br></br>
  
    
<Footer></Footer>
        {/* <Footer></Footer> */}
    </div>
  )
}
