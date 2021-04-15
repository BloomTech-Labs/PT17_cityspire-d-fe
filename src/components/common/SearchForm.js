import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCityData } from '../../state/actions';
import { useHistory } from 'react-router-dom';
import { Row, Col, Input, Space } from 'antd';

const ColStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  top: '20rem',
  zIndex: 99999,
};

const SearchStyle = {
  width: '600p',
};

const SearchForm = ({ fetchCityData }) => {
  const { push } = useHistory();

  const [searchValue, setSearchValue] = useState('');

  // Split search value right by the common
  const splitSearchValue = searchValue.toLowerCase().split(',');

  // Set the split value to city and state
  const cityAndState = {
    city: splitSearchValue[0].trim(),
    state: splitSearchValue[1] ? splitSearchValue[1].trim() : '',
  };

  const { Search } = Input;

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
    fetchCityData(cityAndState);
    push(`/${cityAndState.state}/${cityAndState.city}`);
    setSearchValue('');
  };

  return (
    <Row>
      <Col span={12} offset={6} style={ColStyle}>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Enter city or state"
              onSearch={() => onSubmit()}
              size="large"
              style={SearchStyle}
              value={searchValue.city}
              onChange={handleChange}
            />
          </Space>
          <p
            style={{
              width: '800px',
              fontSize: '2.5rem',
              fontFamily: 'Hachi Maru Pop',
              fontStyle: 'italic',
              marginTop: '-4%',
              backgroundColor: '#5946B2',
              paddingTop: '2rem',
              color: 'white',
              border: '2px outset lightgrey',
              textShadow: '1px 1px 10px #FFCC33',
            }}
          >
            Search Your Desires
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default connect(null, { fetchCityData })(SearchForm);
