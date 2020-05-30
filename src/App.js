import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import Men from './components/Men'
import Women from './components/Women'
import OnSale from './components/OnSale'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/footer'
import Default from './components/Default'
import Faq from './components/Faq'
import Product from './components/Product'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women}/>
          <Route exact path="/onsale" component={OnSale}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/men/:id" component={Product} />
          <Route path="/women/:id" component={Product} />
          <Route path="/onsale/:id" component={Product} />
          <Route component={Default}/>
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
