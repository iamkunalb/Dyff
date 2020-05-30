import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class footer extends Component {
    render() {
        return (
            <footer className="site-footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 d-none d-md-block">
                            <h6>Account</h6>
                            {/* <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
                            <Link to="/login">
                                Login
                            </Link>
                            <br/>
                            <Link to="/login">
                                Register
                            </Link>
                            <br/>
                            <Link to="/login">
                                My order history
                            </Link>
                            <br/>
                            <Link to="/login">
                                My Profile
                            </Link>
                        </div>

                        <div className="col-xs-6 col-md-3 d-none d-md-block">
                            <h6>Shop</h6>
                            {/* <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
                            <Link to="/men">
                                Men
                            </Link>
                            <br/>
                            <Link to="/women">
                                Women
                            </Link>
                            <br/>
                            {/* <Link to="/onsale">
                                On Sale
                            </Link> */}
                        </div>

                        <div className="col-xs-6 col-md-3 d-none d-md-block">
                            <h6>Info</h6>
                            <Link to="/delivery-information">
                                Delivery Information
                            </Link>
                            <br/>
                            <Link to="/returns">
                                Returns Policy
                            </Link>
                            <br/>
                            <Link to="/charities">
                                Charities
                            </Link>
                            <br/>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </div>

                        <div className="col-xs-6 col-md-3 d-none d-md-block">
                            <h6>About</h6>
                            <Link to="/about">
                                About Us
                            </Link>
                            <br/>
                            <Link to="/privacy-policy">
                                Privacy Policy
                            </Link>
                            <br/>
                            <Link to="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </div>








                        <div className="col-xs-6 mr-5 ml-5 d-md-none">
                            <h6>Account</h6>
                            {/* <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
                            <Link to="/login">
                                Login
                            </Link>
                            <br/>
                            <Link to="/login">
                                Register
                            </Link>
                            <br/>
                            <Link to="/login">
                                My order history
                            </Link>
                            <br/>
                            <Link to="/login">
                                My Profile
                            </Link>
                        </div>

                        

                        <div className="col-xs-6 mr-3 d-md-none">
                            <h6>Info</h6>
                            <Link to="/delivery-information">
                                Delivery Information
                            </Link>
                            <br/>
                            <Link to="/returns">
                                Returns Policy
                            </Link>
                            <br/>
                            <Link to="/charities">
                                Charities
                            </Link>
                            <br/>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </div>

                        <div className="col-xs-6 mr-5 ml-5 d-md-none">
                            <h6>About</h6>
                            <Link to="/about">
                                About Us
                            </Link>
                            <br/>
                            <Link to="/privacy-policy">
                                Privacy Policy
                            </Link>
                            <br/>
                            <Link to="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </div>



                    </div>
                    <hr/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/dyff">FB<i className="fa fa-facebook"></i></a></li>
                            <li><a className="linkedin" href="https://www.instagram.com/thedyff">IN<i className="fa fa-linkedin"></i></a></li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
