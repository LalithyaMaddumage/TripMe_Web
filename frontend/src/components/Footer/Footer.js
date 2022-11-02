import React from 'react'
import { Row , Col} from 'react-bootstrap';
// import {FaFacebookF,} from 'react-bootstrap';
import { FaFacebookF , FaTwitter , FaInstagramSquare} from "react-icons/fa";


export const Footer=  () => {
  return (
    <div class="footer-basic">
            <footer>
              <Row className='footer-bg'>
                <Col>
                <FaFacebookF/>  &nbsp; &nbsp;
                <FaTwitter/>  &nbsp; &nbsp;
                <FaInstagramSquare/>  &nbsp; &nbsp;

                </Col>

                <Col>
                <Row> Privacy Policy</Row>
             
                <Row> Tearms and Conditions</Row>
                </Col>

                <Col>
                <Row>Need Helps ?</Row>
               
                <Row> FAQs</Row>
                </Col>

                <Col>
                <Row>About Us</Row>
               
                <Row>Contact Us</Row>
                </Col>

              </Row>
         
                
            </footer>
        </div>
  )
}

