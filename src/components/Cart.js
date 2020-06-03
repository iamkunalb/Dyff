import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
    total(){
        return (this.props.itemsFromNav.reduce((total, item) => {
            return (total + item.price)
        }, 0))
    }
    qty(iteName){
        return (
            this.props.itemsFromNav.reduce(function(n,item){
                return (n + (item.name === iteName))
            }, 0)
        )
    }

    render() {
        let sd = []
        let i = 0;
        
        let fruits_without_duplicates = this.props.itemsFromNav;
        
        let pp = fruits_without_duplicates.filter((ele, ind) => ind === fruits_without_duplicates.findIndex(elem => elem.name === ele.name))
        

        pp.map((ite, index) => {
            sd.push(
                <div key={index} style={{height: '150px',backgroundColor: 'rgb(0,0,0,0)', padding: 10, margin: 10}}>
                    <img src={require('../images/products/' + ite.image)} style={{width: '100px', height: '120px', float: 'left', marginLeft: '20px', marginRight: '20px'}} alt="product"/>
                    <h5>{ite.name}</h5>
                    <h5>${ite.price}.00</h5>
                    <h5>QTY: {this.qty(ite.name)}</h5>
                    <button onClick={() => this.props.removeFromCart(fruits_without_duplicates.findIndex(elem => elem.name === ite.name))} style={{border: '1px solid red',padding: 3, paddingLeft: 6,  paddingRight: 6, marginTop: 5 }}>Remove</button>
                </div>
            )
            i+=1;
        })

        
        
        return (
            <div>
                {sd}
                <div style={{}}>
                    <button style={{border: '1px solid black', bottom: '0', position: 'absolute', left: '0', margin: '0 20px 20px 20px'}}>Continue to checkout</button>
                    <h3 style={{bottom: '0', position: 'absolute', right: '0', margin: '0 20px 20px 0'}}>Total: ${this.total()}.00</h3>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        itemsFromNav: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeFromCart: (item) =>{
            dispatch({
                type: 'REMOVE_FROM_CART',
                item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
