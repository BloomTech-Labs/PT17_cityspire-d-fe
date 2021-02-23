import React from 'react';
import MapboxGLMap from '../../common/MapboxGLMap';

import { Statistic, Row, Col, PageHeader, Card, Layout, Button } from 'antd';

import {
  DollarCircleTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  HomeTwoTone,
  CarTwoTone,
  GoldTwoTone,
  PieChartTwoTone,
  ThunderboltTwoTone,
} from '@ant-design/icons';

const { Footer } = Layout;

const StatisticStyle = {
  fontSize: '1.85rem',
};

const RenderCitySearchResults = ({ cityData, handleOnSave }) => {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: 'first',
      breadcrumbName: localStorage.getItem('cityAndState'),
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
          maxWidth: '1366px',
        }}
        wrap="true"
      >
        <Col xs={24}>
          <h1>Cityspire City Data</h1>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Rental Price"
              value={cityData.rental_price}
              valueStyle={StatisticStyle}
              prefix={<DollarCircleTwoTone twoToneColor="green" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Crime"
              value={cityData.crime}
              valueStyle={StatisticStyle}
              prefix={<SafetyCertificateTwoTone twoToneColor="red" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Air Quality Index"
              value={cityData.air_quality_index}
              valueStyle={StatisticStyle}
              prefix={<CarTwoTone twoToneColor="gray" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Card>
            <Statistic
              title="Diversity Index"
              value={cityData.diversity_index}
              valueStyle={StatisticStyle}
              prefix={<PieChartTwoTone twoToneColor="tan" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={8}>
          <Card>
            <Statistic
              title="Population"
              value={cityData.population}
              valueStyle={StatisticStyle}
              prefix={<GoldTwoTone twoToneColor="purple" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={8}>
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
        <Col xs={24} sm={8} md={8}>
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
      <Row
        style={{
          margin: '5rem auto',
          padding: '0 5vw',
          maxWidth: '1366px',
        }}
        wrap="true"
      >
        <Col xs={24}>
          <h2>Recommended Cities</h2>
        </Col>
        {cityData.recommendations &&
          cityData.recommendations.map(item => {
            return (
              <Col xs={24} sm={8} md={8} key={item.city}>
                <Card style={{ fontSize: '1.2rem' }}>
                  <ThunderboltTwoTone
                    twoToneColor="gold"
                    style={{ marginRight: '.25rem' }}
                  />
                  {item.city}, {item.state}
                </Card>
              </Col>
            );
          })}
      </Row>

      <Footer style={{ backgroundColor: 'white', textAlign: 'center' }}>
        Cityspire ©2021 Created by Labspt15-cityspire-g
      </Footer>
    </>
  );
};

export default RenderCitySearchResults;
