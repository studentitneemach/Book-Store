import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './BookStore/UserData/reducers';
import { Provider } from 'react-redux';

const root = createRoot( document.getElementById('root'));

root.render( 
    <Provider store={store}>
<App/>
    </Provider>

    )
serviceWorker.unregister();
//////////https://github.com/TommmyKelly/shoping-cart-with-context-api/tree/main/

////////////https://www.youtube.com/watch?v=BmVVkpCBWpQ