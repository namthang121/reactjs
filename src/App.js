import React from 'react';
import './App.css';
import Index from './components/pages/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/pages/product";


function App() {
  return (
    <div className="">
        <Router>
                <Route exact path="/" exact component={Index} />
                <Route path="/product" component={Product} />
                <Route path="/contact" component={Index} />
        </Router>
    </div>
  );
}

export default App;
