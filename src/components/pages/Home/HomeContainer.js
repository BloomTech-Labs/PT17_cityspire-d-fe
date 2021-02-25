import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderHomePage from './RenderHomePage';
import { Spin } from 'antd';

const spinStyle = {
  textAlign: 'center',
  marginTop: '25%',
};

function HomeContainer() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
          localStorage.setItem('token', info.sub);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <div style={spinStyle}>
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      )}
      {authState.isAuthenticated && userInfo && <RenderHomePage />}
    </>
  );
}

export default HomeContainer;
