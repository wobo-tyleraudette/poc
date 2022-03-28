import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WoboAuthProvider from '@workboard/auth-ui';
import App from './app/app';
import { config } from './config/config';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <WoboAuthProvider
        config={{
          proxyEndpoint: config.NX_PROXY_URI,
          clientId: config.NX_CLIENT_ID,
          authBaseEndpoint: config.HOMEPAGE_APP_URL,
          redirectUri: 'https://okrcanvas.dt.wobo-int.com/',
        }}
      >
        <App />
      </WoboAuthProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
