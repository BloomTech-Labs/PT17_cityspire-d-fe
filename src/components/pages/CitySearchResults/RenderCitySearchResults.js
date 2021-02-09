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
} from 'antd';

import {
  DollarCircleTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  HomeTwoTone,
  CarTwoTone,
} from '@ant-design/icons';

import citylife from '../../../assets/imgs/citylife.jpg';
import AL from '../../../assets/imgs/AL.png';
import AK from '../../../assets/imgs/AK.png';
import AZ from '../../../assets/imgs/AZ.png';
import AR from '../../../assets/imgs/AR.png';
//planning to import a collage for As many states
//as possible to fit in the carousel at the bottom of the page

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

const RenderCitySearchResults = props => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="New York City, NY"
        breadcrumb={{ routes }}
      />
      <MapboxGLMap />
      <Row style={{ marginTop: '28rem', marginBottom: '5rem' }} wrap="true">
        <Col lg={18} offset={2}>
          <h1>Cityspire Facts</h1>
        </Col>
        <Col lg={4} offset={2}>
          <Card>
            <Statistic
              title="Average Rental Price"
              value={1260}
              valueStyle={StatisticStyle}
              prefix={<DollarCircleTwoTone twoToneColor="green" />}
            />
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Statistic
              title="Crime"
              value={93}
              valueStyle={StatisticStyle}
              prefix={<SafetyCertificateTwoTone twoToneColor="red" />}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Statistic
              title="Pollution"
              value={93}
              valueStyle={StatisticStyle}
              prefix={<CarTwoTone twoToneColor="gray" />}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Statistic
              title="Walkability"
              value={93}
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
              value={93}
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
            <Image class="Carousel" preview={false} src={AL} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={AK} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={AZ} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={AR} />
          </h3>
        </div>
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
