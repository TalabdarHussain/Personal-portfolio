import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import mypic from '../assets/pic.png';

const HeroSection = () => (
  <section className="hero-section">
    <Container>
      <Row>
        {/* Left Side */}
        <Col md={6}>
          <div className="hero-content">
            <h1>Discover, Collect, and Charity in Extraordinary NFT Marketplace</h1>
            <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis.</p>
            <div className="hero-buttons">
              <Button variant="primary">Explore</Button>
              <Button variant="success">Create</Button>
            </div>
          </div>
        </Col>

        {/* Right Side */}
        <Col md={6}>
          <div className="hero-image">
            <Image src={mypic} alt="Hero Image" fluid />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;
