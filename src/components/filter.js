import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <select style={{margin: '10px 10px 10px 10px'}}>
                    <option>Color</option>
                    <option>White</option>
                    <option>Navy</option>
                    <option>Black</option>
                </select>
                <select style={{margin: '10px 10px 10px 10px'}}>
                    <option>Size</option>
                    <option>2XS</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>2XL</option>
                </select>
                <select style={{margin: '10px 10px 10px 10px'}}>
                    <option>Price From</option>
                    <option>$0</option>
                    <option>$5</option>
                    <option>$10</option>
                    <option>$15</option>
                    <option>$20</option>
                    <option>$25</option>
                    <option>$30</option>
                </select>
                <select style={{margin: '10px 10px 10px 10px'}}>
                    <option>Price To</option>
                    <option>$0</option>
                    <option>$5</option>
                    <option>$10</option>
                    <option>$15</option>
                    <option>$20</option>
                    <option>$25</option>
                    <option>$30</option>
                </select>
                <select style={{margin: '10px 10px 10px 10px'}} value={this.props.sort} onChange={this.props.handleSort}>
                    <option>Sort By</option>
                    <option>Popularity</option>
                    <option>Best Match</option>
                    <option>Price - Low to High</option>
                    <option>Price - High to Low</option>
                </select>
            </div>
        )
    }
}
