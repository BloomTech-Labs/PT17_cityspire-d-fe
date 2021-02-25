import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSavedCity, unsaveCity } from '../../../state/actions';

import { Header, Footer } from '../../common';
import RenderUserDashboard from './RenderUserDahsboard';

const UserDashboardContainer = ({
  fetchSavedCity,
  savedCities,
  unsaveCity,
}) => {
  useEffect(() => {
    fetchSavedCity(localStorage.getItem('token'));
  }, [fetchSavedCity]);

  return (
    <>
      <Header />
      <RenderUserDashboard savedCities={savedCities} unsaveCity={unsaveCity} />
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
