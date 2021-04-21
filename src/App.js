import React from 'react';
import { Route, useHistory, Switch, useParams } from 'react-router-dom';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';
import 'mapbox-gl/dist/mapbox-gl.css';

import { NotFoundPage } from './components/pages/NotFound';
import { HomePage } from './components/pages/Home';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { CitySearchResultsPage } from './components/pages/CitySearchResults';
import { UserDashboardPage } from './components/pages/UserDashboard';
import { PinnedCityPage } from './components/pages/PinnedCity';

const App = () => {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  const { id, city, state } = useParams();

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />

        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />

        <SecureRoute path="/profile/:id/dashboard" exact>
          <UserDashboardPage id={id} />
        </SecureRoute>

        <SecureRoute path="/:state/:city" exact>
          <CitySearchResultsPage city={city} state={state} />
        </SecureRoute>

        <SecureRoute path="/pinned/:state/:city" exact>
          <PinnedCityPage city={city} state={state} />
        </SecureRoute>

        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
};

export default App;
