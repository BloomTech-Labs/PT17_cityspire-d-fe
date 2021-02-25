import React from 'react';
import { Row, Col, Card, Button, Statistic } from 'antd';
import {
  DollarCircleTwoTone,
  SmileTwoTone,
  HomeTwoTone,
} from '@ant-design/icons';

const StatisticStyle = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
};

const RenderUserDashboard = ({
  savedCities,
  handleRemoveCity,
  handleOnCityClick,
}) => {
  return (
    <>
      <Row style={{ maxWidth: '1366px', margin: 'auto' }}>
        {savedCities[0] &&
          savedCities[0].map(item => {
            return (
              <Col sm={24} md={12} lg={8} key={item.id}>
                <Card style={{ fontSize: '1.2rem', cursor: 'pointer' }}>
                  <Row>
                    <Col xs={24}>
                      {item.city}, {item.state}
                    </Col>
                    <Col xs={8} sm={8} md={24} lg={12} xl={8}>
                      <Statistic
                        title="Rental Price"
                        value={item.rental_price}
                        prefix={<DollarCircleTwoTone twoToneColor="green" />}
                        valueStyle={StatisticStyle}
                      />
                    </Col>
                    <Col xs={8} sm={8} md={24} lg={12} xl={8}>
                      <Statistic
                        title="Walkability"
                        value={item.walkability}
                        prefix={<SmileTwoTone />}
                        suffix="/ 100"
                        valueStyle={StatisticStyle}
                      />
                    </Col>
                    <Col xs={8} sm={8} md={24} lg={12} xl={8}>
                      <Statistic
                        title="Livability"
                        value={item.livability}
                        prefix={<HomeTwoTone twoToneColor="orange" />}
                        suffix="/ 100"
                        valueStyle={StatisticStyle}
                      />
                    </Col>
                    <Col>
                      <Button onClick={() => handleRemoveCity()}>
                        Remove City
                      </Button>
                      <Button
                        onClick={() =>
                          handleOnCityClick({
                            city: item.city,
                            state: item.state,
                          })
                        }
                      >
                        View City Data
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default RenderUserDashboard;
