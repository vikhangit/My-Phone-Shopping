import React, { Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Product from './features/product/pages/Product';
import ProductDetail from './features/product/pages/ProductDetail';
import Navigation from './components/Navigation';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChevronDown, faChevronRight, faHeart, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

import ProductCart from './features/product/pages/ProductCart';

import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import { Spinner } from 'reactstrap';
import Accessories from './features/product/pages/Accessories';


library.add(fab,
  faHeart,
  faShoppingCart,
  faBars, faTimes,
  faChevronDown, faChevronRight,
  faSearch,
);
dom.watch();

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE
};

const ProductHome = React.lazy(() => import('./features/product/pages/HomePage'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={
        <div>
          <Spinner></Spinner>
          Loading...
        </div>
      }>
        <AlertProvider template={AlertTemplate} {...options}>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" component={ProductHome} />
              <Route path="/product" component={Product} />
              <Route path="/product-detail/:name" component={ProductDetail} />
              <Route path="/product-cart" component={ProductCart} />
              <Route path="/accessories" component={Accessories} />

              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>

        </AlertProvider>

      </Suspense>
    </div>
  );
}

export default App;
