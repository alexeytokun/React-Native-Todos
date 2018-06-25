import React from 'react';
import * as Redux from 'redux';
import Main from './containers/Main';
import {reducer} from "./todoListRedux";

const store = Redux.createStore(reducer);

const App = () => <Main store={store} />;
export default App;