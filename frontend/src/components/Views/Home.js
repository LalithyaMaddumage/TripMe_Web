import React from 'react'
import {Container , Row , Col , Card ,CardGroup,Button} from 'react-bootstrap';
import { Header } from '../Header/Header';
import {Footer} from '../Footer/Footer';

function Home() {
  return (
    <div>
        <Header/>
        <Row className='home-row'>
        <CardGroup>
          <Col> 
          <Card bg= "Light" border="warning" className='home-card'>
        <Card.Img variant="top" src="../../images/img1.jpg" />
        <Card.Body>
          <Card.Title>Top Up Your Account</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href='/main/login'>
        <Button variant="outline-warning">Top Up Your Account</Button>{' '} 
        </a>
        </Card.Footer>
        </Card>
        </Col>

          <Col>
          <Card border="primary" className='home-card'>
        <Card.Img variant="top" src="../../images/img2.jpg" />
        <Card.Body>
          <Card.Title>Loacl Passenger</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href='/main/register'>
        <Button variant="outline-primary">Loacl Passenger Register</Button>{' '} 
        </a>
        </Card.Footer>
        </Card>
          
          </Col>
          <Col>
          <Card border="success" className='home-card'>
        <Card.Img variant="top" src="../../images/img3.png" />
        <Card.Body>
          <Card.Title>Foriegn Passenger</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href='/main/foriegnregister'>
        <Button variant="outline-success">Foriegn Passenger Register</Button>{' '} 
        </a>

          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
        </Card>
          </Col>
        </CardGroup>
        </Row>
        <Footer/>

    </div>
  )
}

export default Home