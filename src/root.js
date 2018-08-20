import React from 'react';
import  App from './app';
import store from './store';
import { Provider } from 'react-redux';


function Root() {
        return (
            <Provider store = { store }>
                <App/>
            </Provider>
        );

};
export default Root;