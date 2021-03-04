import React from 'react';
import { MapboxGLMap } from '../../common';

import {
  Statistic,
  Row,
  Col,
  Card,
  PageHeader,
  Button,
  Carousel,
  Image,
} from 'antd';

import {
  DollarCircleTwoTone,
  SafetyCertificateTwoTone,
  SmileTwoTone,
  HomeTwoTone,
  CarTwoTone,
  GoldTwoTone,
  PieChartTwoTone,
  ThunderboltTwoTone,
  PushpinFilled,
  EnvironmentFilled,
} from '@ant-design/icons';

import citylife from '../../../assets/imgs/citylife.jpg';
import States1 from '../../../assets/imgs/States1.png';
import States2 from '../../../assets/imgs/States2.png';

const StatisticStyle = {
  fontSize: '1.5rem',
};

const RowStyle = {
  margin: '5vw auto',
  padding: '0 5vw',
  maxWidth: '1366px',
};

const contentStyle = {
  height: '395px',
  color: '#fff',
  lineHeight: '30px',
  textAlign: 'center',
  background: '#f0f2f5',
  mgin: '1%',
};

const RenderCitySearchResults = ({
  cityData,
  handleSaveCity,
  handleOnCityClick,
}) => {
  return (
    <>
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
                style={{ marginRight: '.5rem', color: 'rgb(24, 144, 255)' }}
              />
              {cityData.city
                ? `${cityData.city.city}, ${cityData.city.state}`
                : 'loading...'}
            </h1>
          </PageHeader>
        </Col>

        <Col style={{ paddingTop: '4px' }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => handleSaveCity()}
          >
            <PushpinFilled />
            Pin City
          </Button>
        </Col>
      </Row>

      <MapboxGLMap lat={cityData.latitude} long={cityData.longitude} />

      <Row style={RowStyle} wrap="true">
        <Col xs={24}>
          <h2>Cityspire City Data</h2>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Rental Price"
              value={cityData.rental_price}
              valueStyle={StatisticStyle}
              prefix={<DollarCircleTwoTone twoToneColor="green" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Crime"
              value={cityData.crime}
              valueStyle={StatisticStyle}
              prefix={<SafetyCertificateTwoTone twoToneColor="red" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Air Quality Index"
              value={cityData.air_quality_index}
              valueStyle={StatisticStyle}
              prefix={<CarTwoTone twoToneColor="gray" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Diversity Index"
              value={cityData.diversity_index}
              valueStyle={StatisticStyle}
              prefix={<PieChartTwoTone twoToneColor="tan" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Population"
              value={cityData.population}
              valueStyle={StatisticStyle}
              prefix={<GoldTwoTone twoToneColor="purple" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
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
        <Col xs={24} sm={12} md={8}>
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
      <Row style={RowStyle} wrap="true">
        <Col xs={24}>
          <h2>Recommended Cities</h2>
        </Col>
        {cityData.recommendations &&
          cityData.recommendations.map(item => {
            return (
              <Col xs={24} sm={12} md={8} key={item.city}>
                <Card
                  style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                  onClick={() =>
                    handleOnCityClick({ city: item.city, state: item.state })
                  }
                >
                  <ThunderboltTwoTone
                    twoToneColor="gold"
                    style={{ marginRight: '.25rem', fontSize: '1.35rem' }}
                  />
                  {item.city}, {item.state}
                </Card>
              </Col>
            );
          })}
      </Row>

      <Carousel autoplay style={{ mginTop: '2%', mginBottom: '5rem' }}>
        <div>
          <h3 style={contentStyle}>
            {' '}
            <Image className="Carousel" preview={false} src={States1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="Carousel" preview={false} src={States2} />
          </h3>
        </div>
      </Carousel>

      <Image
        preview={false}
        src={citylife}
        style={{ width: '100%', height: '100px' }}
      />
    </>
  );
};
export default RenderCitySearchResults;
