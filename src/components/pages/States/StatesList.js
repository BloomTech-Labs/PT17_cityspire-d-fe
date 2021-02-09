import React from 'react';
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
    breadcrumbName: 'State Name',
  },
];

const StatisticStyle = {
  fontSize: '1.85rem',
};

function StatesList(props) {
  return (
    <div>
      <div>
        <PageHeader
          className="site-page-header"
          title="New York City, NY"
          breadcrumb={{ routes }}
        />
        <Row style={{ marginTop: '28rem', marginBottom: '24rem' }} wrap="true">
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
      </div>
    </div>
  );
}
export default StatesList;
