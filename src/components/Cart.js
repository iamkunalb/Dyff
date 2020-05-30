import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Cart extends Component {
    total(){
        return (this.props.itemsFromNav.reduce((total, item) => {
            return (total + item.price)
        }, 0))
    }
    render() {
        let sd = []
        let i = 0;
        this.props.itemsFromNav.map((ite) => {
            let namee = ite.name.split(' ').join('-');
            sd.push(
                <div key={i} style={{height: '150px',backgroundColor: 'rgb(0,0,0,0)', padding: 10, margin: 10}}>
                    <img src={require('../images/products/' + ite.image)} style={{width: '100px', height: '120px', float: 'left', marginLeft: '20px', marginRight: '20px'}} alt="product"/>
                    <Link to={"/men/"+ namee}><h3>{ite.name}</h3></Link>
                    <h5>${ite.price}.00</h5>
                    <h5>QTY: 1</h5>
                </div>
            )
            i+=1;
        })
        return (
            <div>
                {sd}
                <div style={{}}>
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
        ReToCart: (item) =>{
            dispatch({
                type: 'Re',
                item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
