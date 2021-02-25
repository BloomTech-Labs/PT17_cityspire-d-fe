import React from 'react';
import { Row, Col, Card } from 'antd';

const RenderUserDashboard = ({ savedCities }) => {
  console.log(savedCities);
  return (
    <>
      <Row>
        <Col>
          <Card style={{ width: 250 }}>
            <p>City Name</p>
            <p>Rental Price</p>
            <p>Walkability</p>
            <p>Livability</p>
            <button>Remove City</button>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: 250 }}>
            <p>City Name</p>
            <p>Rental Price</p>
            <p>Walkability</p>
            <p>Livability</p>
            <button>Remove City</button>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: 250 }}>
            <p>City Name</p>
            <p>Rental Price</p>
            <p>Walkability</p>
            <p>Livability</p>
            <button>Remove City</button>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: 250 }}>
            <p>City Name</p>
            <p>Rental Price</p>
            <p>Walkability</p>
            <p>Livability</p>
            <button>Remove City</button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RenderUserDashboard;
