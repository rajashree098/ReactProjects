import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducer from './reducers';
import RootComponent from './component/Rootcomponent';
import {Provider} from 'react-redux'

const myStore = createStore(allReducer)
ReactDOM.render(
<Provider store={myStore}>
<RootComponent/>
</Provider>,
document.getElementById('root'))

