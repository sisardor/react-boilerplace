/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { getLoadableState } from 'loadable-components/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet'

import App from '../app/containers/App';
import configureStore from '../app/configureStore';
import { renderHeader, renderFooter } from './render';
import LanguageProvider from '../app/containers/LanguageProvider';
import { translationMessages } from '../app/i18n';

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);



// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/assets',
});

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', async (req, res) => {
  console.log('----------- server side render -------------');
  // console.log(res.locals.webpackStats);
  const store = configureStore();
  const context = {};
  // const { styleManager, theme } = createStyleManager();

  const appWithRouter = (
        <Provider store={store}>
          <LanguageProvider messages={translationMessages}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
          </LanguageProvider>
        </Provider>
  );

  if (context.url) {
      res.redirect(context.url);
      return;
  }
  let loadableState = {};

  // store.runSaga(sagas).done.then(() => {
      const helmet = Helmet.renderStatic();
      res.status(200).write(renderHeader(helmet));

      const preloadedState = store.getState();
      const css = ''// styleManager.sheetsToString();

      const htmlSteam = renderToNodeStream(appWithRouter);
      htmlSteam.pipe(res, { end: false });
      htmlSteam.on('end', () => {
          res.write(renderFooter(css, loadableState, preloadedState));
          return res.send();
      });
  // });

  // Trigger sagas for component to run
  // https://github.com/yelouafi/redux-saga/issues/255#issuecomment-210275959
  loadableState = await getLoadableState(appWithRouter);

  // Dispatch a close event so sagas stop listening after they're resolved
  // store.close();
});



// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
