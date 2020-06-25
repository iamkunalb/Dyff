import React, { Component } from 'react'
import '../cart.css'
import {connect} from 'react-redux'
import PaypalButtons from './PaypalButton'

let tCode = ''

class CartFull extends Component {
    constructor(){
        super()
        this.state = {
            showPaypal: false,
            code: '',
            finalPrice: 0,
            inCode: false,
            butDis: false,
            disc: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.checkCode = this.checkCode.bind(this)
        this.emptyC = this.emptyC.bind(this)
        this.inCode = this.inCode.bind(this)
        
    }
    componentDidMount(){
        console.log("here")
        this.setState({
            finalPrice: this.total()
        })
    }

    showPaypalButtons = () => {
        this.setState({ showPaypal: true });
    };

    total(){
        return (this.props.itemsFromNav.reduce((total, item) => {
            return (total + item.price)
        }, 0))
    }

    finalTotal(){
        return(parseFloat(((Math.round((this.total() * this.state.disc) * 100) / 100).toFixed(2))))
    }
    
    qty(iteName){
        return (
            this.props.itemsFromNav.reduce(function(n,item){
                return (n + (item.name === iteName))
            }, 0)
        )
    }
    
    handleChange(e) {
        // this.setState({ code: e.target.value });
        tCode = e.target.value
    }

    checkCode(){
        console.log(tCode)
        this.props.codes.map((it) => {
            if(it.code.toLowerCase() === tCode){
                this.setState({
                    code: tCode,
                    butDis: true,
                    disc: 0.9,
                    inCode: false
                })
            }
        })
        this.inCode()
    }

    inCode(){
        if (tCode !== this.state.code){
            this.setState({
                inCode: true
            })
        }
        if (tCode === ''){
            this.setState({
                inCode: true
            })
        }
        if (tCode === this.state.code ){
            this.setState({
                inCode: false
            })
        }
    }
    
    emptyC(){
        this.props.emptyCart()
        // console.log("EMPRTRU")
    }
    
    render() {
        let ship = parseFloat((Math.round(5 * 100) / 100).toFixed(2));
        let none = 0;
        let fruits_without_duplicates = this.props.itemsFromNav;
        let pp = fruits_without_duplicates.filter((ele, ind) => ind === fruits_without_duplicates.findIndex(elem => elem.name === ele.name))

        const { showPaypal } = this.state;
        if (showPaypal) {
            return <PaypalButtons />;
        }
        else{
            // console.log(this.props.itemsFromNav)
            // console.log(this.props.codes)

            return (
                <div className="" style={{overflow:'auto'}}>
                    <div style={{width: '100%'}}>
                        <div style={{display: 'table', width: '80%', margin: '0 auto', position:'relative', textAlign: 'center', maxHeight: '400px', overflow: 'hidden', backgroundColor: 'black', color:'white', height: 150}}>
                            <div style={{display: 'table-cell', verticalAlign: 'middle', color: 'white'}}>
                                <h1 style={{color: 'white'}}>
                            Checkout.
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-5">
                                <h1 className="module-title font-alt"></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <input className="form-control" type="text" id="" name="" placeholder="Coupon code" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <button className="btn btn-round btn-g" id="codeBt" disabled={this.state.butDis} onClick={this.checkCode} type="submit">Apply</button>
                                    {this.state.inCode ? <p style={{color: 'red'}}>Invalid Coupon Code!</p> : <p></p>}
                                </div>
                            </div>
                        </div>

                        <hr className="divider-w pt-20"/>
                        
                        <div className="row" style={{float: 'left'}}>
                            <div>
                                <table className="table ">
                                    <tbody>
                                    <tr>
                                        <th className="hidden-xs">Item</th>
                                        <th>Description</th>
                                        <th className="hidden-xs">Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    {pp.map((it, index)=> {
                                        return (
                                            <tr key={index}>
                                                <td className="hidden-xs" ><a href="#"><img src={require('../images/products/' + it.image)} style={{width: 100}} alt="Item"/></a></td>
                                                <td style={{verticalAlign: 'middle'}}>
                                                <h5 className="product-title font-alt">{it.name}</h5>
                                                </td>
                                                <td className="hidden-xs" style={{verticalAlign: 'middle'}}>
                                                <h5 className="product-title font-alt">${it.price}.00</h5>
                                                </td>
                                                <td className="product-title font-alt" style={{verticalAlign: 'middle'}}>
                                                {/* <input className="form-control" type="number" name="" value={this.qty(it.name)} max="50" min="1"/> */}
                                                    <h5 className="product-title font-alt">{this.qty(it.name)}</h5>
                                                </td>
                                                <td style={{verticalAlign: 'middle'}}>
                                                    <h5 className="product-title font-alt">${it.price * this.qty(it.name)}.00</h5>
                                                </td>
                                                <td className="pr-remove" style={{verticalAlign: 'middle'}}>
                                                    <button className="product-title font-alt" onClick={() => this.props.removeFromCart(fruits_without_duplicates.findIndex(elem => elem.name === it.name))} style={{border: '1px solid red',padding: 3, paddingLeft: 6,  paddingRight: 6}}>Remove</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{float: 'right'}}>
                            <div className="row">
                                <div className="shop-Cart-totalbox" style={{textAlign: 'center'}}>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                            <th>Cart Subtotal :</th>
                                            <td>${this.finalTotal()}</td>
                                            </tr>
                                            <tr>
                                            <th>Shipping Total :</th>
                                            <td>${this.finalTotal() !== 0 ? ship : none}</td>
                                            </tr>
                                            <tr className="shop-Cart-totalprice">
                                            <th>Total :</th>
                                            <td>${this.finalTotal() !== 0 ? this.finalTotal()+ship : none}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {this.state.code !== '' ? <p>{this.state.code.toUpperCase()} Applied! 10% Off</p> : <p></p>}
                                    {/* <button onClick={this.showPaypalButtons} className="btn btn-lg btn-block btn-round btn-d" type="submit">Proceed to Checkout</button> */}
                                    {this.total() !== 0 ? <PaypalButtons emptyC={this.emptyC} total={this.finalTotal()+ship} /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        itemsFromNav: state.cart,
        codes: state.codess
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeFromCart: (item) =>{
            dispatch({
                type: 'REMOVE_FROM_CART',
                item
            })
        },
        emptyCart: () => {
            dispatch({
                type: 'EMPTY_CART',
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartFull)