import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSavedCity, unsaveCity } from '../../../state/actions';
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
      <RenderUserDashboard savedCities={savedCities} unsaveCity={unsaveCity} />
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
