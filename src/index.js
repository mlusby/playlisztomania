import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app/app';

injectTapEventPlugin();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};
render(App);

if (module.hot) {
    module.hot.accept('./app/app', () => {
        try {
            const NextApp = require('./app/app').default; // eslint-disable-line global-require
            render(NextApp);
        } catch (error) {
            console.error(`==> ReduxState hot reloading error ${error}`);
        }
    });
}
