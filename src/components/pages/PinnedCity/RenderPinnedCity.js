import React from 'react';
import { MapboxGLMap } from '../../common';

import { Statistic, Row, Col, Card, PageHeader, Button } from 'antd';

import {
  DollarCircleTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  HomeTwoTone,
  CarTwoTone,
  GoldTwoTone,
  PieChartTwoTone,
  PushpinFilled,
  EnvironmentFilled,
} from '@ant-design/icons';

const StatisticStyle = {
  fontSize: '1.5rem',
};

const RowStyle = {
  margin: '5vw auto',
  padding: '0 5vw',
  maxWidth: '1366px',
};

const RenderPinnedCities = ({ savedCities, handleRemoveCity }) => {
  return (
    <>
      {Object.keys(savedCities).map((key, i) => (
        <div key={key}>
          {savedCities[key].map(item => (
            <div>
              <Row
                style={{
                  padding: '.25rem 5vw',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'ghostwhite',
                }}
              >
                <Col>
                  <PageHeader style={{ marginLeft: '-1.5rem' }}>
                    <h1 style={{ fontSize: '1.5rem' }}>
                      <EnvironmentFilled
                        style={{
                          marginRight: '.5rem',
                          color: 'rgb(24, 144, 255)',
                        }}
                      />
                      {savedCities
                        ? `${item.city}, ${item.state}`
                        : 'Loading...'}
                    </h1>
                  </PageHeader>
                </Col>
                <Col style={{ paddingTop: '4px' }}>
                  <Button
                    size="large"
                    shape="round"
                    type="secondary"
                    onClick={() => handleRemoveCity(item.id)}
                  >
                    <PushpinFilled /> Remove City
                  </Button>
                </Col>
              </Row>

              <MapboxGLMap lat={item.latitude} long={item.longitude} />

              <Row style={RowStyle} wrap="true">
                <Col xs={24}>
                  <h2>Cityspire City Data</h2>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card>
                    <Statistic
                      title="Rental Price"
                      value={item.rental_price}
                      valueStyle={StatisticStyle}
                      prefix={<DollarCircleTwoTone twoToneColor="green" />}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card>
                    <Statistic
                      title="Crime"
                      value={item.crime}
                      valueStyle={StatisticStyle}
                      prefix={<SafetyCertificateTwoTone twoToneColor="red" />}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card>
                    <Statistic
                      title="Air Quality Index"
                      value={item.air_quality_index}
                      valueStyle={StatisticStyle}
                      prefix={<CarTwoTone twoToneColor="gray" />}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card>
                    <Statistic
                      title="Diversity Index"
                      value={item.diversity_index}
                      valueStyle={StatisticStyle}
                      prefix={<PieChartTwoTone twoToneColor="tan" />}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card>
                    <Statistic
                      title="Population"
                      value={item.population}
                      valueStyle={StatisticStyle}
                      prefix={<GoldTwoTone twoToneColor="purple" />}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card>
                    <Statistic
                      title="Walkability"
                      value={item.walkability}
                      valueStyle={StatisticStyle}
                      prefix={<SmileTwoTone />}
                      suffix="/ 100"
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card>
                    <Statistic
                      title="Livability"
                      value={item.livability}
                      valueStyle={StatisticStyle}
                      prefix={<HomeTwoTone twoToneColor="orange" />}
                      suffix="/ 100"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RenderPinnedCities;
