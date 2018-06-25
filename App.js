import React from 'react';
import {createStore} from 'redux';
import Main from './containers/Main';
import {reducer} from "./todoListRedux";
import {Provider} from 'react-redux';

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);
export default App;