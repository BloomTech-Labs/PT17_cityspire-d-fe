import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchSavedCity,
  unsaveCity,
  fetchCityData,
} from '../../../state/actions';

import { Spin, notification } from 'antd';
import { Header, Footer } from '../../common/';
import RenderUserDashboard from './RenderUserDashboard';

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
  const { push } = useHistory();

  useEffect(() => {
    fetchSavedCity(localStorage.getItem('token'));
  }, [fetchSavedCity]);

  const deleteNotification = () => {
    notification.open({
      message: 'City Removed',
      description: `${savedCities.city}, ${savedCities.state}, has been has been removed from Pinned Cities.`,
    });
  };

  const handleRemoveCity = id => {
    fetchSavedCity(localStorage.getItem('token'));
    unsaveCity(localStorage.getItem('token'), id);
    deleteNotification();
  };

  const handleOnCityClick = cityAndState => {
    fetchCityData(cityAndState);
    push(`/${cityAndState.city}-${cityAndState.state}`);
  };

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
          handleRemoveCity={handleRemoveCity}
          handleOnCityClick={handleOnCityClick}
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
