import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cardImage1 from '../assets/card-image-1.jpg';
import cardImage2 from '../assets/card-image-2.jpg';
import cardImage3 from '../assets/card-image-3.jpg';

const ThreeCards = () => (
  <Container>
    <Row>
      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardImage1} />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is a sample card with some content. You can customize it as needed.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardImage2} />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              Another card with different content. Customize it based on your requirements.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardImage3} />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              Third card with its own content. Feel free to modify the content as you wish.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ThreeCards;
