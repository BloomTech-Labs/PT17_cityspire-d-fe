import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCityData } from '../../state/actions';
import { useHistory } from 'react-router-dom';
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
  width: '55vw',
  minWidth: '24rem',
  maxWidth: '80rem',
  padding: '1rem',
};

const TitleStyle = {
  color: 'white',
  fontSize: '4rem',
  textShadow: '0 4px 10px rgba(0,0,0,.5)',
};
const SearchForm = ({ fetchCityData }) => {
  const { push } = useHistory();

  const [searchValue, setSearchValue] = useState('');

  // Split search value right by the common
  const splitSearchValue = searchValue.toLowerCase().split(', ');

  // Set the split value to city and state
  const cityAndState = {
    city: splitSearchValue[0],
    state: splitSearchValue[1],
  };

  const { Search } = Input;
  const { Title } = Typography;

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
    fetchCityData(cityAndState);
    push(`/${cityAndState.city}-${cityAndState.state}`);
    setSearchValue('');
  };

  return (
    <Row>
      <Col span={12} offset={6} style={ColStyle}>
        <div>
          <Title style={TitleStyle}></Title>

          <Search
            placeholder="Ex. New York, NY"
            allowClear
            onSearch={() => onSubmit()}
            size="large"
            style={SearchStyle}
            value={searchValue.city}
            onChange={handleChange}
          />
          <p
            style={{
              fontSize: '2.5rem',
              fontFamily: 'Hachi Maru Pop, cursive',
              fontStyle: 'italic',
              marginTop: '-8%',
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
