import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSavedCity, unsaveCity } from '../../../state/actions';

import { Spin } from 'antd';
import { Header, Footer } from '../../common/';
import RenderUserDashboard from './RenderUserDahsboard';

const spinStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '46%',
  width: '100%',
  margin: 'auto',
};

const UserDashboardContainer = ({
  fetchSavedCity,
  savedCities,
  unsaveCity,
  isFetching,
}) => {
  useEffect(() => {
    fetchSavedCity(localStorage.getItem('token'));
  }, [fetchSavedCity]);

  return (
    <>
      <Header />
      {isFetching ? (
        <div style={spinStyle}>
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      ) : (
        <RenderUserDashboard
          savedCities={savedCities}
          unsaveCity={unsaveCity}
        />
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.cityOperations.isFetching,
    error: state.cityOperations.error,
    savedCities: state.cityOperations.savedCities,
    isSaved: state.cityOperations.isSaved,
  };
};
export default connect(mapStateToProps, {
  fetchSavedCity,
  unsaveCity,
})(UserDashboardContainer);
