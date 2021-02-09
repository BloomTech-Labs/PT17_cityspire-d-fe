import React from 'react';
import cityspireLogo from '../../../assets/imgs/cityspireLogo.png';

import { Layout, Avatar, Button, Image, Space } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import SearchForm from '../../common/SearchForm';

const { Header, Content, Footer } = Layout;

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

      <Content style={{ height: '85vh', marginTop: '-11.4rem' }}>
        <SearchForm fetchCityData={fetchCityData} />
      </Content>

      <Footer style={{ backgroundColor: 'white', textAlign: 'center' }}>
        Cityspire ©2021 Created by Labspt15-cityspire-g
      </Footer>
    </Layout>
  );
}
export default RenderHomePage;
