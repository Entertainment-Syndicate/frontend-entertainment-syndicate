import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain={'dev-ikja9n-1.eu.auth0.com'}
    clientId={'u4ybZfNdrk1ndIqGj65e5Rq3ZVKoqi42'}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
