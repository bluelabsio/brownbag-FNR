import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import configureStore from "./state/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { checkLoggedIn } from "./helpers/session";

const renderApp = preloadedState => {
  const store = configureStore(preloadedState);

  // FOR TESTING, remove before production
  window.state = store.getState;

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

(async () => renderApp(await checkLoggedIn()))();