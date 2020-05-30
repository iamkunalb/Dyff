import React, { Component } from 'react'
import Slider from './Slider'
import Popular from './Popular'
import Banner from './Banner'

export default class Home extends Component {
    
    componentDidMount(){
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <React.Fragment>
                <Slider/>
                <Banner/>
                <Popular/>
                <div>
                    
                </div>
            </React.Fragment>
        )
    }
}


