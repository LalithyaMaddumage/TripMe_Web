
import React from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import { BsFillBookmarkCheckFill , BsFillInfoCircleFill ,BsFillPersonFill ,BsGrid3X3GapFill,BsBoxArrowInDownRight} from "react-icons/bs";

import '../../Header.scss';



export const Header = (props) => {


  
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
        <a href='/'>
        <Col className='head-title' >
          <h5>
            <BsGrid3X3GapFill/> &nbsp;Home </h5>
        </Col>
        </a>
        <Col className='head-title'>
          <h5> <BsFillInfoCircleFill/>  &nbsp; About </h5>
        </Col>
        <a href='/main/adminlog'>
        <Col className='head-title pr-5'>
          <h5> <BsFillPersonFill/>  &nbsp; Admin  </h5>
        </Col>
   
        </a>
        <a href='/main/login'>
        <Col className='head-title'>
          <h5> <BsBoxArrowInDownRight/>  &nbsp; Login  </h5>
        </Col>
        </a>
      </Row>


    </div>
   
   
  )
}
