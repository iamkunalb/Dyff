import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../lgo.png'
import {Link} from 'react-router-dom'
import '../util.css'
import Cart from './Cart'

export default class Navbar extends Component {
    constructor(props) 
    { 
        super(props); 
        this.state = {
            display : "block",
            sideWidth: "0",
            cartWidth: "0"
        };

        this.myFunction = this.myFunction.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.closecart = this.closecart.bind(this);
        this.openCart = this.openCart.bind(this);
    }

    myFunction() {
        if (this.state.sideWidth === "350px") {
            this.setState({sideWidth: "0"});
        } else {
            this.setState({sideWidth: "350px"});
        }
    }

    closeNav(){
        this.setState({sideWidth: "0"});
    }

    closecart(){
        this.setState({cartWidth: "0"});
    }

    

    openCart(){
        if (this.state.cartWidth === "350px") {
            this.setState({cartWidth: "0"});
        } else {
            this.setState({cartWidth: "350px"});
        }
    }
    

    render() {
        
        return (
            <React.Fragment>
                <div className="wrap-header-desktop d-none d-lg-block">
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
        
                            <div className="right-top-bar flex-w h-full">
                                <Link to="/faq" className="flex-c-m trans-04 p-lr-25">
                                    Help & FAQs
                                </Link>
                                <Link to="/login" className="flex-c-m trans-04 p-lr-25">
                                        Login
                                </Link>
        
                                <a className="flex-c-m trans-04 p-lr-25">
                                    NZD
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <nav className="limiter-menu-desktop container p-3">

                        <Link to="/">
                            <img src={logo} style={{width:'120px', height:'50px'}} alt="IMG-LOGO"/>
                        </Link>

                        <div className="menu-desktop">
                            <ul className="main-menu">
                                {/* <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li> */}

                                <li>
                                    <Link to="/men">
                                        Men
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/women">
                                        Women
                                    </Link>
                                </li>

                                {/* <li className="label1" data-label1="hot">
                                    <Link to="/onsale">
                                        On Sale
                                    </Link>
                                </li> */}

                                <li>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="wrap-icon-header flex-w flex-r-m">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <i className="zmdi zmdi-search"></i>
                            </div>

                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                <i className="zmdi zmdi-shopping-cart" onClick={this.openCart}>Cart</i>
                            </div>
                        </div>
                    </nav>
                </div>

                

                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <Link to="/">
                            <img src={logo} alt="IMG-LOGO"/>
                        </Link>
                    </div>

                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"></i>
                        </div>

                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                            <i className="zmdi zmdi-shopping-cart" onClick={this.openCart}>Cart</i>
                        </div>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box" style={{cursor: 'pointer'}} onClick={this.myFunction}>
                            <div style={{
                                width: '35px',
                                height: '5px',
                                backgroundColor: 'black',
                                margin: '6px 0'    
                            }}></div>
                            <div style={{
                                width: '35px',
                                height: '5px',
                                backgroundColor: 'black',
                                margin: '6px 0'    
                            }}></div>
                            <div style={{
                                width: '35px',
                                height: '5px',
                                backgroundColor: 'black',
                                margin: '6px 0'    
                            }}></div>
                            
                        </span>
                    </div>
                </div>

                <div id="mySidenav" className="sidenav" style={{width: this.state.sideWidth}}>
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <Link to="/men" onClick={this.closeNav}>Men</Link>
                    <Link to="/women" onClick={this.closeNav}>Women</Link>
                    <Link to="/onsale" onClick={this.closeNav}>On Sale</Link>
                    <Link to="/about" onClick={this.closeNav}>About</Link>
                    <Link to="/contact" onClick={this.closeNav}>Contact</Link>
                </div>

                <div id="cart" className="cart" style={{width: this.state.cartWidth}}>
                    <a className="closebtn" onClick={this.closecart}>&times;</a>
                    <h1 style={{textAlign: "center", margin: 10, marginTop: 0}}>Cart</h1>
                    <div style={{height: '80%', overflow: 'scroll'}}>
                        <Cart/>
                    </div>
                    
                </div>
                
            </React.Fragment>
        )
    }
}
