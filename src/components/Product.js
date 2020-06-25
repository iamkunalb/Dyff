import React, { Component } from 'react'
import db from '../Config'
import {Link} from 'react-router-dom'
import '../index.css'
import Popular from './Popular'

export default class Product extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            price: "",
            image: "loding.gif",
            qty: 1,
            color: [],
            ads: []
        }
        
        this.addQty = this.addQty.bind(this)
        this.removeQty = this.removeQty.bind(this)

    }

    componentDidMount(){ 
        window.scrollTo(0, 0);
        db.collection('products').get().then(
            snapshot => {
                snapshot.docs.forEach(doc => {
                    // console.log(doc.data().color)
                    if (doc.data().name === this.props.match.params.id.split('-').join(' ')){
                        this.setState({
                            name: doc.data().name,
                            price: doc.data().price,
                            image: doc.data().image,
                        })
                    }
                })
            }
        )

        let jj = []
        this.state.color.map((color) => {
            jj.push(
                <option>{color}</option>
            )
        })
        console.log(this.state.color)
        this.setState({
            ads: jj
        })
    }

    addQty(){
        this.setState({
            qty: this.state.qty+1
        })
    }

    removeQty(){
        if (this.state.qty > 1){
            this.setState({
                qty: this.state.qty-1
            })
        }
    }

    handleChange (e) {
        console.log('handle change called')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true">></i>
                        </Link>

                        <Link to="/men" className="stext-109 cl8 hov-cl1 trans-04">
                            Men
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true">></i>
                        </Link>

                        <span className="stext-109 cl4">
                            {this.state.name}
                        </span>
                    </div>
                </div>

                <section className="sec-product-detail bg0 p-t-65 p-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-7 p-b-30">
                                <div className="p-l-25 p-r-30 p-lr-0-lg">
                                    <div className="wrap-slick3 flex-sb flex-w">
                                        <div className="wrap-slick3-dots"></div>
                                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                        <div className="slick3 gallery-lb">
                                            <div className="item-slick3" data-thumb={require("../images/products/" + this.state.image)}>
                                                <div className="wrap-pic-w pos-relative">
                                                    <img src={require("../images/products/" + this.state.image)} alt="IMG-PRODUCT"/>

                                                    <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={require("../images/products/" + this.state.image)}>
                                                        <p className="fa fa-expand">X</p>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5 p-b-30">
                                <div className="p-r-50 p-t-5 p-lr-0-lg">
                                    <h4 id="name" className="mtext-105 cl2 js-name-detail p-b-14">
                                        {this.state.name}
                                    </h4>

                                    <span className="mtext-106 cl2">
                                        ${this.state.price}.00
                                    </span>

                                    <div className="p-t-33">
                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Size
                                            </div>

                                            <div className="size-204 respon6-next">
                                                <div className="rs1-select2 bor8 bg0">
                                                    <select id="size" className="js-select2" name="time">
                                                        <option>Choose an option</option>
                                                        <option>XS</option>
                                                        <option>S</option>
                                                        <option>M</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                    </select>
                                                    <div className="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Color
                                            </div>

                                            <div className="size-204 respon6-next">
                                                <div className="rs1-select2 bor8 bg0">
                                                    <select id="color" className="js-select2" name="time">
                                                        <option>Choose an option</option>
                                                        {this.state.ads}
                                                    </select>
                                                    <div className="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-204 flex-w flex-m respon6-next">
                                                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={this.removeQty}>
                                                        <i className="fs-16 zmdi zmdi-minus">-</i>
                                                    </div>

                                                    <input id="qty" className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={this.state.qty} onChange={(e) => {this.handleChange(e)}}/>

                                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={this.addQty}>
                                                        <p className="fs-16 zmdi zmdi-plus">+</p>
                                                    </div>
                                                </div>

                                                <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="bor10 m-t-50 p-t-43 p-b-40">
                            <div className="tab01">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                                    </li>

                                    <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
                                    </li>
                                </ul>

                                <div className="tab-content p-t-43">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                                        <div className="how-pos2 p-lr-15-md">
                                            <p>
                                                Recommended for Lifestyle.
                                                <br/>
                                                <br/>
                                                No one does premium staples quite like BOSS, and their 3-Pack Cotton T-Shirts are no exception. Crafted from pure cotton, this multi-pack offers three crew-neck tees in versatile shades - the embroidered branding adding a subtle element of sophistication to the must-have style.
                                                <br/>
                                                <br/>
                                                Our model is wearing a size medium tee, and usually takes a size medium/38 shirt. He is 6’1” (185cm) tall with a 39” (99cm) chest and a 32” (81cm) waist.
                                                <br/>
                                                <br/>
                                                - Length: 65cm (size medium)
                                                <br/>
                                                - Set of three tees
                                                <br/>
                                                - Regular fit
                                                <br/>
                                                - 100% cotton jersey; natural, ribbed stretch
                                                <br/>
                                                - Black, white and grey marle shades
                                                <br/>
                                                - Ribbed crew neckline
                                                <br/>
                                                - Embroidered logo to chest
                                            </p>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="information" role="tabpanel">
                                        <div className="row">
                                            <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                                <ul className="p-lr-28 p-lr-15-sm">
                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Material:
                                                        </span>

                                                        <span className="stext-102 cl6 size-206">
                                                            100% Cotton
                                                        </span>
                                                    </li>

                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Length:
                                                        </span>

                                                        <span className="stext-102 cl6 size-206">
                                                            65 cm
                                                        </span>
                                                    </li>

                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Care:
                                                        </span>

                                                        <span className="stext-102 cl6 size-206">
                                                            Warm machine wash. Cool iron.
                                                        </span>
                                                    </li>

                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Color
                                                        </span>

                                                        <span className="stext-102 cl6 size-206">
                                                            White
                                                        </span>
                                                    </li>

                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Size
                                                        </span>

                                                        <span className="stext-102 cl6 size-206">
                                                            XS, S, M, L, XL
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>         

                <section className="sec-relate-product">
                    <div className="container">
                        <h3 className="ltext-106 cl5 txt-center">
                            Related Products
                        </h3>
                    </div>
                </section>       
                <Popular/>
            </div>
        )
    }
}
