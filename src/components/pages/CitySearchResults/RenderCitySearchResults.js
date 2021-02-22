import React from 'react';
import { connect } from 'react-redux';
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
// import AZ from '../../../assets/imgs/AZ.png';
// import AR from '../../../assets/imgs/AR.png';

const { Footer } = Layout;
const routes = [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: 'first',
    breadcrumbName: 'City Name',
  },
];

const StatisticStyle = {
  fontSize: '1.85rem',
};

const contentStyle = {
  height: '395px',
  color: '#fff',
  lineHeight: '30px',
  textAlign: 'center',
  background: '#f0f2f5',
  margin: '1%',
};

const RenderCitySearchResults = ({ cityData }) => {
  return (
    <>
      <PageHeader className="site-page-header" breadcrumb={{ routes }} />
      <MapboxGLMap />
      <Row style={{ marginTop: '23rem', marginBottom: '5rem' }} wrap="true">
        <Col lg={18} offset={2}>
          <h1>Cityspire City Data</h1>
        </Col>
        <Col lg={4} offset={2}>
          <Card>
            <Statistic
              title="Rental Price"
              value={cityData.rental_price}
              valueStyle={StatisticStyle}
              prefix={<DollarCircleTwoTone twoToneColor="green" />}
            />
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Statistic
              title="Crime"
              value={cityData.crime}
              valueStyle={StatisticStyle}
              prefix={<SafetyCertificateTwoTone twoToneColor="red" />}
            />
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Statistic
              title="Pollution"
              value={cityData.pollution}
              valueStyle={StatisticStyle}
              prefix={<CarTwoTone twoToneColor="gray" />}
            />
          </Card>
        </Col>
        <Col lg={4}>
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
        <Col lg={4}>
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

      <Carousel autoplay style={{ marginTop: '2%', marginBottom: '5rem' }}>
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
            <Image class="Carousel" preview={false} src={AZ} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={AR} />
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

const mapStateToProps = state => {
  return {
    isFetching: state.cityData.isFetching,
    error: state.cityData.error,
    cityData: state.cityData.city,
  };
};

export default connect(mapStateToProps)(RenderCitySearchResults);
