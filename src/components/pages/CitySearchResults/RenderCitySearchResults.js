import React from 'react';
import MapboxGLMap from '../../common/MapboxGLMap';

import {
  Statistic,
  Row,
  Col,
  PageHeader,
  Card,
  Layout,
  Image,
  Carousel,
  Button,
} from 'antd';

import {
  DollarCircleTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  HomeTwoTone,
  CarTwoTone,
} from '@ant-design/icons';

import citylife from '../../../assets/imgs/citylife.jpg';
import States1 from '../../../assets/imgs/States1.png';
import States2 from '../../../assets/imgs/States2.png';
// import States3 from '../../../assets/imgs/States3.png';
// import  from '../../../assets/imgs/.png';

const { Footer } = Layout;

const StatisticStyle = {
  fontSize: '1.85rem',
};

const contentStyle = {
  height: '395px',
  color: '#fff',
  lineHeight: '30px',
  textAlign: 'center',
  background: '#f0f2f5',
  mgin: '1%',
};

const RenderCitySearchResults = ({ cityData, handleOnSave }) => {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: 'first',
      breadcrumbName: `${cityData.city}`,
    },
  ];

  return (
    <>
      <Row style={{ padding: '1rem' }}>
        <Col lg={8}>
          <PageHeader className="site-page-header" breadcrumb={{ routes }} />
        </Col>
        <Col
          style={{ position: 'absolute', right: '2.5rem', paddingTop: '4px' }}
        >
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => handleOnSave()}
          >
            Save City
          </Button>
        </Col>
      </Row>

      <MapboxGLMap lat={-73.935242} long={40.73061} />
      <Row
        style={{
          margin: '28rem auto 5rem',
          padding: '0 5vw',
        }}
        wrap="true"
      >
        <Col xs={24}>
          <h1>Cityspire City Data</h1>
        </Col>
        <Col xs={24} sm={8} md={4}>
          <Card>
            <Statistic
              title="Rental Price"
              value={cityData.rental_price}
              valueStyle={StatisticStyle}
              prefix={<DollarCircleTwoTone twoToneColor="green" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={4}>
          <Card>
            <Statistic
              title="Crime"
              value={cityData.crime}
              valueStyle={StatisticStyle}
              prefix={<SafetyCertificateTwoTone twoToneColor="red" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={4}>
          <Card>
            <Statistic
              title="Pollution"
              value={cityData.pollution}
              valueStyle={StatisticStyle}
              prefix={<CarTwoTone twoToneColor="gray" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Walkability"
              value={cityData.walkability}
              valueStyle={StatisticStyle}
              prefix={<SmileTwoTone />}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Livability"
              value={cityData.livability}
              valueStyle={StatisticStyle}
              prefix={<HomeTwoTone twoToneColor="orange" />}
              suffix="/ 100"
            />
          </Card>
        </Col>
      </Row>

      <Carousel autoplay style={{ mginTop: '2%', mginBottom: '5rem' }}>
        <div>
          <h3 style={contentStyle}>
            {' '}
            <Image class="Carousel" preview={false} src={States1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={States2} />
          </h3>
        </div>
        {/* <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={States3} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={} />
          </h3>
        </div> */}
      </Carousel>

      <Image
        preview={false}
        src={citylife}
        style={{ width: '100%', height: '100px' }}
      />
      <Footer style={{ backgroundColor: 'white', textAlign: 'center' }}>
        Cityspire ©2021 Created by Labspt15-cityspire-g
      </Footer>
    </>
  );
};

export default RenderCitySearchResults;
