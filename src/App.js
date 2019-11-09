import React from 'react';
import './App.css';
import Index from './components/pages/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/pages/product";
import Contact from "./components/pages/contact";


function App() {
  return (
    <div className="">
        <Router>
                <Route exact path="/" exact component={Index} />
                <Route path="/product/:id" component={Product} />
                <Route path="/contact" component={Contact} />
        </Router>
    </div>
  );
}

export default App;
