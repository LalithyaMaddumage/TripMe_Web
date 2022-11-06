import React from 'react'
import {Container , Row , Col} from 'react-bootstrap';
import { BsFillBookmarkCheckFill , BsFillInfoCircleFill ,BsFillPersonFill ,BsGrid3X3GapFill} from "react-icons/bs";
import '../../Header.scss';
export const CusHeader = (props) => {
  return (
    <div >
      
      <Row className='rw-head'>

        <Col sm={5} className='col-clr'>

        <div className='logo'>
          <h3>
            <img src='../../images/icons8-bus-64.png' />
          </h3>
        </div>
        
        </Col>
        <a href='/main/addBusService'>
        <Col className='head-title' >
          <h5>
            <BsGrid3X3GapFill/> &nbsp;Add bus Service </h5>
        </Col>
        </a>
        <a href='/main/booking'>
        <Col  className='head-title'>
          <h5> <BsFillBookmarkCheckFill/> &nbsp; Booking </h5>
        </Col>
      </a>
      <a href='/main/busService'>
        <Col className='head-title'>
          <h5> <BsFillInfoCircleFill/>  &nbsp; Bus Services </h5>
        </Col>
        </a>
        <Col className='head-title'>
          <h5> <BsFillPersonFill/>  &nbsp; Profile  </h5>
        </Col>

      </Row>


    </div>
   
  )
}
