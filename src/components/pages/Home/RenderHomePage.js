import React from 'react';
import cityspireLogo from '../../../assets/imgs/cityspireLogo.png';
import cities from '../../../assets/imgs/cities.png';
import citylife from '../../../assets/imgs/citylife.jpg';
import map from '../../../assets/imgs/map2.jpg';

import { Layout, Avatar, Button, Image, Space } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import MapboxGLMap from '../../common/MapboxGLMap';
import SearchForm from '../../common/SearchForm';

import StatesContainer from '../USstates/StatesContainer';

const { Header, Content, Footer } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;

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
        <SearchForm />
        <MapboxGLMap />
      </Content>

      <StatesContainer
        style={{ color: 'blue', height: '20vh', margin: '2rem' }}
      />
      {/* <StatesList style={{ color: 'blue', height: '20vh', margin: '2rem' }}/> */}

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
