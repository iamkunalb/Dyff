import React, { Component } from 'react'
import slider1 from '../images/slide-01.jpg'
import slider2 from '../images/slide-02.jpg'
import {Link} from 'react-router-dom'
import db from '../Config'
import Filter from './filter'
import Modal from './Modal'
// import { addToCart } from './actions/cartActions'
import {connect} from 'react-redux'

class Men extends Component {
    constructor(){
        super();
        this.state = {
            jign: [],
            products: [],
            sort: '',
            show: false,
        }
        this.handleSort = this.handleSort.bind(this);
        this.updateProds = this.updateProds.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        this.setState({show:true})
    }

    handleSort(e){
        this.setState({
            sort: e.target.value
        })
        let temp = [];
        if (e.target.value === "Price - Low to High"){
            temp = this.state.products.sort(function(a, b) {
                return a.price - b.price;
            });
        }else if(e.target.value === "Price - High to Low"){
            temp = this.state.products.sort(function(a, b) {
                return b.price - a.price;
            });
        }
        this.updateProds(temp);
    }

   

    updateProds(filterProd){
        let ff = []
        this.setState({jign: []})
        let i = 0
        filterProd.forEach(doc => {
            let namee = doc.name.split(' ').join('-');
            ff.push(<div key={i} style={{margin: '0 auto',textAlign: 'center'}}>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-5 isotope-item d-block d-sm-none" style={{width: 'auto', float:'left'}}>
                        <div className="block2" style={{width: 'auto', float:'left'}}>
                            <div className="block2-pic hov-img0 " style={{height:'180px', width:'130px', overflow:'hidden'}}>
                                <img id="prodImage" style={{height: '180px', width: '100%'}} src={require('../images/products/' + doc.image)} alt="IMG-PRODUCT"/>
                                <button className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onClick={() => this.props.addToCart(doc.name)}>
                                    Quick View
                                </button>
                            </div>

                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l ">
                                    <Link to={"/men/"+ namee} id="prodName" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">{doc.name}</Link>
                                    <span className="stext-105 cl3">
                                        <a id="prodPrice"><b>${doc.price}.00</b></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 m-1 mt-5 isotope-item d-none d-sm-block" style={{width: 'auto', float:'left'}}>
                        <div className="block2" style={{width: 'auto', float:'left'}}>
                            <div className="block2-pic hov-img0" style={{height:'300px', width:'240px', overflow:'hidden'}}>
                                <img id="prodImage" style={{height: '300px', width: '100%'}} src={require('../images/products/' + doc.image)} alt="IMG-PRODUCT"/>
                                <button className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onClick={() => this.props.addToCart(doc.name)} >
                                    Quick View
                                </button>
                            </div>

                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l ">
                                    <Link to={"/men/"+namee} id="prodName" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">{doc.name}</Link>
                                    <span className="stext-105 cl3">
                                        <a id="prodPrice"><b>${doc.price}.00</b></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            i+=1;
            this.setState ({
                jign: ff
            })
        })
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        let ff = []
        let i = 0;
        db.collection('products').get().then(
            snapshot => {
                this.props.dsds.forEach(doc => {
                    let namee = doc.name.split(' ').join('-');
                    ff.push(<div key={i} style={{margin: '0 auto',textAlign: 'center'}}>
                            <div className="col-sm-6 col-md-4 col-lg-3 mt-5 isotope-item d-block d-sm-none" style={{width: 'auto', float:'left'}}>
                                <div className="block2" style={{width: 'auto', float:'left'}}>
                                    <div className="block2-pic hov-img0 " style={{height:'180px', width:'130px', overflow:'hidden'}}>
                                        <img id="prodImage" style={{height: '180px', width: '100%'}} src={require('../images/products/' + doc.image)} alt="IMG-PRODUCT"/>
                                        <button className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onClick={() => this.props.addToCart(doc.name)}>
                                            Quick View
                                        </button>
                                    </div>
        
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to={"/men/"+namee} id="prodName" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">{doc.name}</Link>
                                            <span className="stext-105 cl3">
                                                <a id="prodPrice"><b>${doc.price}.00</b></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-sm-6 col-md-4 col-lg-3 m-1 mt-5 isotope-item d-none d-sm-block" style={{width: 'auto', float:'left'}}>
                                <div className="block2" style={{width: 'auto', float:'left'}}>
                                    <div className="block2-pic hov-img0" style={{height:'300px', width:'240px', overflow:'hidden'}}>
                                        <img id="prodImage" style={{height: '300px', width: '100%'}} src={require('../images/products/' + doc.image)} alt="IMG-PRODUCT"/>
                                        <button className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onClick={() => this.props.addToCart(doc)}>
                                            Quick View
                                        </button>
                                    </div>
        
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to={"/men/"+namee} id="prodName" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">{doc.name}</Link>
                                            <span className="stext-105 cl3">
                                                <a id="prodPrice"><b>${doc.price}.00</b></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    i+=1;
                    this.setState ({
                        jign: ff
                    })
                })
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div style={{position:'relative', textAlign: 'center', maxHeight: '400px', overflow: 'hidden'}} className="d-xl-none">
                    <img  width="100%" style={{minWidth: '300px'}} height="auto" src={slider2} alt="sliderPic"/>
                </div>
            
                <div style={{position:'relative', textAlign: 'center', maxHeight: '500px', overflow: 'hidden'}} className="d-none d-xl-block">
                    <img  width="80%" style={{minWidth: '300px'}} height="auto" src={slider1} alt="sliderPic"/>
                </div>
                <Filter sort={this.state.sort} handleSort={this.handleSort}/>
                <div className="container" >
                    <div className="row isotope-grid" style={{textAlign: 'center'}}>
                        {this.state.jign}
                    </div>
                </div>
                <Modal show={this.state.show}/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log('state', state)
    return{
        dsds: state.forSale
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart: (item) =>{
            dispatch({
                type: 'ADD_TO_CART',
                item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Men)

