import React, { Component } from 'react'
import '../filter.css'

export default class filter extends Component {
    render() {
        return (
            <div className="col-lg-3 order-2 order-lg-1">
                {/* <div className="filter-widget">
                    <h2 className="fw-title">Categories</h2>
                    <ul className="category-menu">
                        <li><a href="#">Woman wear</a>
                            <ul className="sub-menu">
                                <li><a href="#">Midi Dresses <span>(2)</span></a></li>
                                <li><a href="#">Maxi Dresses<span>(56)</span></a></li>
                                <li><a href="#">Prom Dresses<span>(36)</span></a></li>
                                <li><a href="#">Little Black Dresses <span>(27)</span></a></li>
                                <li><a href="#">Mini Dresses<span>(19)</span></a></li>
                            </ul>
                        </li>
                        <li><a href="#">Man Wear</a>
                            <ul className="sub-menu">
                                <li><a href="#">Midi Dresses <span>(2)</span></a></li>
                                <li><a href="#">Maxi Dresses<span>(56)</span></a></li>
                                <li><a href="#">Prom Dresses<span>(36)</span></a></li>
                            </ul></li>
                        <li><a href="#">Children</a></li>
                        <li><a href="#">Bags & Purses</a></li>
                        <li><a href="#">Eyewear</a></li>
                        <li><a href="#">Footwear</a></li>
                    </ul>
                </div> */}
                {/* <div className="filter-widget mb-0">
                    <h2 className="fw-title">refine by</h2>
                    <div className="price-range-wrap">
                        <h4>Price</h4>
                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="270">
                            <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '0%', width: '100%'}}></div>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '0%'}}>
                            </span>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '100%'}}>
                            </span>
                        </div>
                        <div className="range-slider">
                            <div className="price-input">
                                <input type="text" id="minamount"/>
                                <input type="text" id="maxamount"/>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="filter-widget mb-0">
                    <h2 className="fw-title">Refine</h2>
                    <div className="fw-color-choose">
                        <button onClick={this.props.menen}>Men</button>
                        <span onClick={this.props.menen}>Women</span>
                    </div>
                </div>

                <div className="filter-widget mb-0">
                    <h2 className="fw-title">color</h2>
                    <div className="fw-color-choose">
                        <div className="cs-item">
                            <input type="radio" name="cs" id="gray-color" value="gray" onChange={this.props.refine}/>
                            <label className="cs-gray" htmlFor="gray-color">
                                <span>Gray</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="orange-color" value="orange" onChange={this.props.refine}/>
                            <label className="cs-orange" htmlFor="orange-color">
                                <span>Orange</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="yellow-color" value="yellow" onChange={this.props.refine}/>
                            <label className="cs-yollow" htmlFor="yellow-color">
                                <span>Yellow</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="black-color" value="black" onChange={this.props.refine}/>
                            <label className="cs-black" htmlFor="black-color">
                                <span>Black</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="purple-color" value="purple" onChange={this.props.refine}/>
                            <label className="cs-purple" htmlFor="purple-color">
                                <span>Purple</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="blue-color" value="blue" onChange={this.props.refine}/>
                            <label className="cs-blue" htmlFor="blue-color">
                                <span>Blue</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="white-color" value="white" onChange={this.props.refine}/>
                            <label className="cs-white" htmlFor="white-color">
                                <span>White</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="pink-color" value="pink" onChange={this.props.refine}/>
                            <label className="cs-purple" htmlFor="pink-color">
                                <span>Pink</span>
                            </label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" name="cs" id="all-color" value="all" onChange={this.props.refine}/>
                            <label className="cs-purple" htmlFor="all-color">
                                <span>All</span>
                            </label>
                        </div>
                        
                    </div>
                </div>
                <div className="filter-widget mb-0">
                    <h2 className="fw-title">Size</h2>
                    <div className="fw-size-choose">
                        <div className="sc-item">
                            <input type="radio" name="sc" id="xs-size" />
                            <label htmlFor="xs-size">XS</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" name="sc" id="s-size"/>
                            <label htmlFor="s-size">S</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" name="sc" id="m-size"  />
                            <label htmlFor="m-size">M</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" name="sc" id="l-size"/>
                            <label htmlFor="l-size">L</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" name="sc" id="xl-size"/>
                            <label htmlFor="xl-size">XL</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" name="sc" id="xxl-size"/>
                            <label htmlFor="xxl-size">XXL</label>
                        </div>
                    </div>
                </div>
                {/* <div className="filter-widget">
                    <h2 className="fw-title">Brand</h2>
                    <ul className="category-menu">
                        <li><a href="#">Abercrombie & Fitch <span>(2)</span></a></li>
                        <li><a href="#">Asos<span>(56)</span></a></li>
                        <li><a href="#">Bershka<span>(36)</span></a></li>
                        <li><a href="#">Missguided<span>(27)</span></a></li>
                        <li><a href="#">Zara<span>(19)</span></a></li>
                    </ul>
                </div> */}
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         dsds: state.forSale
//     }
// }

// function mapDispatchToProps(dispatch){
//     return{
//         addToCart: (item) =>{
//             dispatch({
//                 type: 'ADD_TO_CART',
//                 item
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(filter)

// <div>
//     <div>
//         <select style={{margin: '10px 10px 10px 10px'}}>
//             <option>Color</option>
//             <option>White</option>
//             <option>Navy</option>
//             <option>Black</option>
//         </select>
//     </div>
//     <div>
//         <select style={{margin: '10px 10px 10px 10px'}}>
//             <option>Size</option>
//             <option>2XS</option>
//             <option>XS</option>
//             <option>S</option>
//             <option>M</option>
//             <option>L</option>
//             <option>XL</option>
//             <option>2XL</option>
//         </select>
//     </div>
//     <div >
//         <select style={{margin: '10px 10px 10px 10px'}}>
//             <option>Price From</option>
//             <option>$0</option>
//             <option>$5</option>
//             <option>$10</option>
//             <option>$15</option>
//             <option>$20</option>
//             <option>$25</option>
//             <option>$30</option>
//         </select>
//     </div>
//     <div >
//         <select style={{margin: '10px 10px 10px 10px'}}>
//             <option>Price To</option>
//             <option>$0</option>
//             <option>$5</option>
//             <option>$10</option>
//             <option>$15</option>
//             <option>$20</option>
//             <option>$25</option>
//             <option>$30</option>
//         </select>
//     </div>
//     <div >
//         <select style={{margin: '10px 10px 10px 10px'}} value={this.props.sort} onChange={this.props.handleSort}>
//             <option>Sort By</option>
//             <option>Popularity</option>
//             <option>Best Match</option>
//             <option>Price - Low to High</option>
//             <option>Price - High to Low</option>
//         </select>
//     </div>
// </div>