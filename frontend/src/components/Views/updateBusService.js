import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../Header.scss'

export default function UpdateBusService({ data, cl }) {


  //usestate for srore busservice data 

  console.log("kkkkk", data)
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



  //user effect fuction to get busService details from backened 
  useEffect(() => {
    console.log("hgggf", data);


    setBusServiceName(data.BusServiceName)
    setBusNumber(data.BusNumber)
    setBusType(data.BusType)
    setRouteNumber(data.RouteNumber)
    setDepartureTime(data.DepartureTime)
    setJourneyTime(data.JourneyTime)
    setRestStops(data.RestStops)
    setAirCondition(data.AirCondition)
    setWiFi(data.WiFi)
    setChargingPlugs(data.ChargingPlugs)


  }, [])

// send data function to send all details get from update form
  function sendData(e) {
    e.preventDefault();

    console.log("Date.....", Date);

// update bus object to store all bus service details
    const updateBus = {
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
    console.log("update ", updateBus);

    //frontend request to get bus service details

    axios.put(`http://localhost:8070/busService/updateBusService/${data._id}`, updateBus).then(() => {

  // swal to display customised alert
     Swal.fire({
    icon: 'success',
    title: 'Bus Service Update Successfully',
    timer: 3000
   
      })
      window.location.reload();

    }).catch((err) => {
      alert(err)
    })

  }

  return (
    <div>


      {/* <Col md={{ span: 6, offset: 3 }}> */}

      <Form onSubmit={sendData} className='form-reg'>
        <h4 className='reg'> Update Bus Service Details  </h4>

        <Form.Group className="mb-3" controlId="formBasicBusNumber" pattern="[A-Z0-9][A-Z0-9]-[0-9][0-9][0-9][0-9]">
          <Form.Label>BusNumber</Form.Label>
          <Form.Control type="BusNumber" value={BusNumber}
            onChange={(e) => {
              setBusNumber(e.target.value);  //asign values
            }}

            required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicBusServiceName">
          <Form.Label>BusServiceName</Form.Label>
          <Form.Control type="BusServiceName" value={BusServiceName}
            onChange={(e) => {
              setBusServiceName(e.target.value);  //asign values
            }}

            required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicBusType">
          <Form.Label>BusType</Form.Label>
          <Form.Control type="type" value={BusType}

            onChange={(e) => {
              setBusType(e.target.value);  //asign values
            }}

            required />
        </Form.Group>

        <Row>
          <Col>

            <Form.Group className="mb-3" controlId="formBasicRouteNumber">
              <Form.Label>RouteNumber</Form.Label>
              <Form.Control type="text" value={RouteNumber}

                onChange={(e) => {
                  setRouteNumber(e.target.value);  //asign values
                }}
                required />
            </Form.Group>

          </Col>

          <Col>

            <Form.Group className="mb-3" controlId="formBasicDepartureTime">
              <Form.Label>DepartureTime</Form.Label>
              <Form.Control type="text" value={DepartureTime}
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
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control type="text" value={JourneyTime}
                onChange={(e) => {
                  setJourneyTime(e.target.value);  //asign values
                }}

                required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicTRestStops">
              <Form.Label>RestStops</Form.Label>
              <Form.Control type="number" value={RestStops}
                onChange={(e) => {
                  setRestStops(e.target.value);  //asign values
                }}

                required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicAirCondition">
          <Form.Label >AirCondition &nbsp;</Form.Label>
          {/* <Form.Control type="AirCondition" value={AirCondition}
            onChange={(e) => {
              setAirCondition(e.target.value);  //asign values
            }}

            required /> */}

          <Form.Select
            className="defaultDropDown"
            aria-label="Default select example"
            label="Route Number"
            size="lg"
            value={AirCondition}
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

        <Form.Group className="mb-3" controlId="formBasicWiFi">
          <Form.Label className='mr-5'>WiFi&nbsp;&nbsp;&nbsp; &nbsp;</Form.Label>
          {/* <Form.Control type="text" value={WiFi}
            onChange={(e) => {
              setWiFi(e.target.value);  //asign values
            }}

            required /> */}

          <Form.Select
            className="defaultDropDown"
            aria-label="Default select example"
            label="Route Number"
            size="lg"
            value={WiFi}
            onChange={(e) => {
              setWiFi(e.target.value);  //asign values
            }}
            required
          >
            <option>Select</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicChargingPlugs">
          <Form.Label>Charging Plugs &nbsp;</Form.Label>
          {/* <Form.Control type="text" value={ChargingPlugs}
            onChange={(e) => {
              setChargingPlugs(e.target.value);  //asign values
            }}

            required /> */}
          <Form.Select
            className="defaultDropDown"
            aria-label="Default select example"
            label="Route Number"
            size="lg"
            value={ChargingPlugs}
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


        <Button className='booking-btn' variant="outline-primary" type="submit">
          Update
        </Button>

        <Button className='booking-cancel-btn' variant="outline-danger" onClick={cl}>
          cancel
        </Button>
      </Form>




      {/* </Col> */}


    </div>
  )
}
