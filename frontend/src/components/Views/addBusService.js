import React, { useState } from 'react'
import axios from 'axios'
import { CusHeader } from '../Header/cusHeader';
import { Container, Row, Col, Form } from 'react-bootstrap';

import Swal from "sweetalert2";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../Header.scss'



export default function AddBusService() {



  //userState for set all bus service data to variables

  const [BusServiceName, setBusServiceName] = useState("");
  const [BusNumber, setBusNumber] = useState("");
  const [BusType, setBusType] = useState("");
  const [RouteNumber, setRouteNumber] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [JourneyTime, setJourneyTime] = useState("");
  const [RestStops, setRestStops] = useState("");
  const [AirCondition, setAirCondition] = useState("");
  const [WiFi, setWiFi] = useState("");
  const [ChargingPlugs, setChargingPlugs] = useState("");


  //send data function to send all added data after clicking add button
  function sendData(e) {
    e.preventDefault();

    // console.log("Date.....",Date);

// new bus service object to set all values to an object
    const newBusService = {
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


    console.log("new Bus Service", newBusService);

    //send new busservice object to backend using axios
    //it will send all data using bus service frontend services 
    axios.post(`http://localhost:8070/busService/addBusService`, newBusService).then(() => {

      // swal to display customised alert
      Swal.fire({
        icon: 'success',
        title: 'Add Bus Service Successfully',
        timer: 3000
     
    })

      window.location.replace("/main/busservice");

    }).catch((err) => {
      alert(err)
    })

  }

  return (
    <div>
      <div>
        <CusHeader />
        <br></br>
        <br></br>
        <br></br>



        <Row >
          <Col md={{ span: 6, offset: 3 }}>

            <Form onSubmit={sendData} className='form-reg'>
              <h4 className='reg'> Add Bus Service  </h4>

              <Form.Group className="mb-3" controlId="formBasicBusNumber">
                <Form.Label>Bus Number</Form.Label>
                <Form.Control type="BusNumber" placeholder="BusNumber" pattern="[A-Z0-9][A-Z0-9]-[0-9][0-9][0-9][0-9]"
                  onChange={(e) => {
                    setBusNumber(e.target.value);  //asign values
                  }}

                  required />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicBusServiceName">
                <Form.Label>Bus Service Name</Form.Label>
                <Form.Control type="BusServiceName" placeholder="BusServiceName"
                  onChange={(e) => {
                    setBusServiceName(e.target.value);  //asign values
                  }}

                  required />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicBusType">
                <Form.Label>Bus Type</Form.Label>
                <Form.Control type="type" placeholder="BusType"

                  onChange={(e) => {
                    setBusType(e.target.value);  //asign values
                  }}

                  required />
              </Form.Group>

              <Row>
                <Col>

                  <Form.Group className="mb-3" controlId="formBasicRouteNumber">
                    <Form.Label>Route Number</Form.Label>
                    <Form.Control type="text" placeholder="RouteNumber"
                      onChange={(e) => {
                        setRouteNumber(e.target.value);  //asign values
                      }}
                      required />

                  </Form.Group>

                </Col>

                <Col>

                  <Form.Group className="mb-3" controlId="formBasicDepartureTime">
                    <Form.Label>DepartureTime</Form.Label>
                    <Form.Control type="Time" placeholder="DepartureTime"
                      onChange={(e) => {
                        setDepartureTime(e.target.value);  //asign values
                      }}

                      required />
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
                    <Form.Label>Arriaval Time</Form.Label>
                    <Form.Control type="Time"
                      onChange={(e) => {
                        setJourneyTime(e.target.value);  //asign values
                      }}

                      required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicTRestStops">
                    <Form.Label>RestStops</Form.Label>
                    <Form.Control type="number" placeholder="RestStops"
                      onChange={(e) => {
                        setRestStops(e.target.value);  //asign values
                      }}

                      required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicAirCondition">
                <Form.Label>AirCondition &nbsp; &nbsp;</Form.Label>
                {/* <Form.Control type="AirCondition" placeholder="AirCondition "
                  onChange={(e) => {
                    setAirCondition(e.target.value);  //asign values
                  }}

                  required /> */}
                <Form.Select
                  className="defaultDropDown"
                  aria-label="Default select example"
                  label="Route Number"
                  size="lg"
                  onChange={(e) => {
                    setAirCondition(e.target.value);  //asign values
                  }}
                  required
                >
                  <option>Select</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicWiFi">
                <Form.Label>WiFi &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</Form.Label>
                {/* <Form.Control type="text" placeholder="WiFi "
                  onChange={(e) => {
                    setWiFi(e.target.value);  //asign values
                  }}

                  required /> */}
                <Form.Select
                  className="defaultDropDown"
                  aria-label="Default select example"
                  label="Route Number"
                  size="lg"
                  onChange={(e) => {
                    setWiFi(e.target.value);  //asign values  //asign values
                  }}
                  required
                >
                  <option>Select</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </Form.Select>

              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicChargingPlugs">
                <Form.Label>Charging Plugs &nbsp;&nbsp;</Form.Label>
                {/* <Form.Control type="text" placeholder="ChargingPlugs "
                  onChange={(e) => {
                    setChargingPlugs(e.target.value);  //asign values
                  }}

                  required /> */}
                <Form.Select
                  className="defaultDropDown"
                  aria-label="Default select example"
                  label="Route Number"
                  size="lg"
                  onChange={(e) => {
                    setChargingPlugs(e.target.value);  //asign values
                  }}
                  required
                >
                  <option>Select</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </Form.Select>
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group> */}


              <Button className='booking-btn' variant="success" type="submit">
                Booking
              </Button>
            </Form>




          </Col>
        </Row>
        <br></br>



      </div>





    </div>
  )
}
