import React from 'react';
import './App.css';
import Index from './components/pages/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/pages/product";
import Contact from "./components/pages/contact";
import Category from "./components/pages/category";
import BangBaoGia from "./components/pages/bangbaogia";


function App() {
  return (
    <div className="">
        <Router>
                <Route exact path="/"  component={Index} />
                <Route path="/san-pham/:id" component={Product} />
                <Route path="/lien-he" component={Contact} />
                <Route path="/danh-muc/:id" component={Category} />
                <Route path="/bang-bao-gia-2020" component={BangBaoGia} />
        </Router>
    </div>
  );
}

export default App;
