import React from 'react';
import cityspireLogo from '../../../src/assets/imgs/cityspireLogo.png';
import { Avatar, Button, Image, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = props => {
  const { userInfo, authService } = props;
  return (
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
        </Space>
        <Button onClick={() => authService.logout()}>Logout</Button>
      </Space>
    </Header>
  );
};

export default Header;
