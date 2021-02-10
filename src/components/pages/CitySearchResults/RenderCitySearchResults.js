import React from 'react';
import { connect } from 'react-redux';
import MapboxGLMap from '../../common/MapboxGLMap';
import { Statistic, Row, Col, PageHeader, Card } from 'antd';

import {
  DollarCircleTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  HomeTwoTone,
  CarTwoTone,
} from '@ant-design/icons';

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

const RenderCitySearchResults = ({ cityData }) => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        // title={cityData.city}
        breadcrumb={{ routes }}
      />
      <MapboxGLMap />
      <Row style={{ marginTop: '28rem', marginBottom: '24rem' }} wrap="true">
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
