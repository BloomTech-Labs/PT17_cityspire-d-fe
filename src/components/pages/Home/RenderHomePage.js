import React from 'react';
import cityspireLogo from '../../../assets/imgs/cityspireLogo.png';
import cities from '../../../assets/imgs/cities.png';
import citylife from '../../../assets/imgs/citylife.jpg';
import map from '../../../assets/imgs/map2.jpg';
import city1 from '../../../assets/imgs/city1.png';
import city2 from '../../../assets/imgs/city2.png';
import city3 from '../../../assets/imgs/city3.png';
import city4 from '../../../assets/imgs/city4.png';
import city5 from '../../../assets/imgs/city5.png';

import { Layout, Avatar, Button, Image, Space, Carousel } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import SearchForm from '../../common/SearchForm';

import '../Home/home.css';

const { Header, Content, Footer } = Layout;

const contentStyle = {
  height: '255px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#f0f2f5',
  margin: '2%',
};

function RenderHomePage(props) {
  const { userInfo, authService, fetchCityData } = props;

  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image preview={false} src={cityspireLogo} style={{ width: '120px' }} />

        <Space size="large">
          <Space size="small">
            <Avatar size="small" icon={<UserOutlined />} />
            {userInfo.name}
            {console.log(userInfo)}
          </Space>
          <Button onClick={() => authService.logout()}>Logout</Button>
        </Space>
      </Header>
      <Image
        class="cities"
        preview={false}
        src={cities}
        style={{ width: '100%', height: '30vh', marginBottom: '3rem' }}
      />
      <Space
        size="large"
        align="center"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2%',
          textAlign: 'center',
        }}
      >
        {' '}
      </Space>
      <Content style={{ height: '85vh', marginTop: '-11.4rem' }}>
        <SearchForm fetchCityData={fetchCityData} />
      </Content>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            {' '}
            <Image class="Carousel" preview={false} src={city1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={city2} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={city3} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={city4} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image class="Carousel" preview={false} src={city5} />
          </h3>
        </div>
      </Carousel>
      ,
      <Space size="large" align="center">
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '2%',
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Image
          preview={false}
          src={map}
          style={{
            width: '100%',
            height: '100x',
            marginBottom: '5%',
          }}
        />{' '}
      </Space>
      <Image
        preview={false}
        src={citylife}
        style={{ width: '100%', height: '100px' }}
      />
      <Footer style={{ backgroundColor: 'white', textAlign: 'center' }}>
        Cityspire ©2021 Created by Labspt15-cityspire-g
      </Footer>
    </Layout>
  );
}
export default RenderHomePage;
