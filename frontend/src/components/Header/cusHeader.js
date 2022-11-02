import React from 'react'
import {Container , Row , Col} from 'react-bootstrap';
import { BsFillBookmarkCheckFill , BsFillInfoCircleFill ,BsFillPersonFill ,BsGrid3X3GapFill} from "react-icons/bs";

export default function CusHeader() {
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
      
        <Col className='head-title' >
          <h5>
            <BsGrid3X3GapFill/> &nbsp;Main </h5>
        </Col>

        <Col sm={2} className='head-title'>
          <h5> <BsFillBookmarkCheckFill/> &nbsp; Customer Booking </h5>
        </Col>

        <Col className='head-title'>
          <h5> <BsFillInfoCircleFill/>  &nbsp; About </h5>
        </Col>
        
        <Col className='head-title'>
          <h5> <BsFillPersonFill/>  &nbsp; Admin  </h5>
        </Col>

      </Row>


    </div>
   
  )
}
