import React from 'react';
import {BrowserRouter, Swicth, Route} from 'react-router-dom';
import Main from './pages/main';
import Product  from "./pages/product";

const Routes = () => (
    <BrowserRouter>
    <Swicth>
    <Route Path="/" component={Main} />
    <Route Path="/products/:id" component={Main} />
    </Swicth>
    </BrowserRouter>
);
export default Routes;