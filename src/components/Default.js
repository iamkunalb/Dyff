import React, { Component } from 'react'
import slider1 from '../images/slide-01.jpg'
import slider2 from '../images/slide-02.jpg'

export default class Default extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
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
                <h1>...</h1>
                <h1>PAGE NOT FOUND :(</h1>
                <h1>...</h1>
            </React.Fragment>
        )
    }
}
