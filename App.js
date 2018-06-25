import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import Main from './containers/Main';
import { reducer } from "./todoListRedux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(pReducer, undefined, applyMiddleware(thunk));
const persistor = persistStore(store);

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Main />
        </PersistGate>
    </Provider>
);
export default App;