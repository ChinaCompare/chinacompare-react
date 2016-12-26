/* @flow */
/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import { CodeSplitProvider, rehydrateState } from 'code-split-component';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import configureStore from '../shared/redux/configureStore';
import IntlProvider from '../shared/components/IntlProvider';
import ReactHotLoader from './components/ReactHotLoader';
import DemoApp from '../shared/components/DemoApp';
import TaskRoutesExecutor from './components/TaskRoutesExecutor';
import { polyfillIntlApi, registerLocaleData } from '../shared/utils/intl';
import { selectIntlLocale } from '../shared/reducers/intl';
import { safeConfigGet } from '../shared/utils/config';

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

// Create our Redux store.
const store = configureStore(
  // Server side rendering would have mounted our state on this global.
  window.__APP_STATE__, // eslint-disable-line no-underscore-dangle
);

const locales = safeConfigGet(['locales']);
locales.map(registerLocaleData);

/*let locale = selectIntlLocale()(store.getState());
//!window.Intl && polyfillIntlApi(locale);
//registerLocaleData(locale);*!/*/

function renderApp(TheApp) {
  // We use the code-split-component library to provide us with code splitting
  // within our application.  This library supports server rendered applications,
  // but for server rendered applications it requires that we rehydrate any
  // code split modules that may have been rendered for a request.  We use
  // the provided helper and then pass the result to the CodeSplitProvider
  // instance which takes care of the rest for us.  This is really important
  // to do as it will ensure that our React checksum for the client will match
  // the content returned by the server.
  // @see https://github.com/ctrlplusb/code-split-component
  rehydrateState().then(codeSplitState =>
    render(
      <ReactHotLoader>
        <CodeSplitProvider state={codeSplitState}>
          <Provider store={store}>
            <IntlProvider>
              <BrowserRouter>
                {
                  // The TaskRoutesExecutor makes sure any data tasks are
                  // executed prior to our route being loaded.
                  // @see ./src/shared/routeTasks/
                  routerProps => (
                    <TaskRoutesExecutor {...routerProps} dispatch={store.dispatch}>
                      <TheApp />
                    </TaskRoutesExecutor>
                  )
                }
              </BrowserRouter>
            </IntlProvider>
          </Provider>
        </CodeSplitProvider>
      </ReactHotLoader>,
      container,
    ),
  );
}

// The following is needed so that we can support hot reloading our application.
if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '../shared/components/DemoApp',
    () => renderApp(require('../shared/components/DemoApp').default),
  );
  // Accept changes to translations for hot reloading.
  module.hot.accept('./i18n');
}

// Execute the first render of our app.
renderApp(DemoApp);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('./registerServiceWorker');
