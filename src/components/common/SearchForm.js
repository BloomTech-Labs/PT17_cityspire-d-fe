import React, { useState } from 'react';
import { Row, Col, Input, Typography } from 'antd';

const ColStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  top: '20rem',
  zIndex: 99999,
};

const SearchStyle = {
  width: '32vw',
  minWidth: '24rem',
  maxWidth: '40rem',
  padding: '1rem',
};

const TitleStyle = {
  color: 'white',
  fontSize: '4rem',
  textShadow: '0 4px 10px rgba(0,0,0,.5)',
};
const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const { Search } = Input;
  const { Title } = Typography;

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    // Will eventually utilize redux action here to
    // send searchValue to backend API
    setSearchValue('');
  };

  return (
    <Row>
      <Col span={12} offset={6} style={ColStyle}>
        <div>
          <Title style={TitleStyle}>h1. Ant Design</Title>
          <Search
            placeholder="Search for Apartments"
            allowClear
            onSearch={onSearch}
            size="large"
            style={SearchStyle}
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default SearchForm;
