import React, { Component } from 'react'
import slider1 from '../images/slide-01.jpg'
import slider2 from '../images/slide-02.jpg'
import '../about.css'

export default class Faq extends Component {
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
                <div id="intro" className="basic-1">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-5"> */}
                                <div className="text-container" style={{margin: '0px 20px 0px 20px'}}>
                                    {/* <div className="section-title">FAQ</div> */}
                                    <h2>Frequently Asked Questions</h2>
                                    <p>Discover the best of independent NZ fashion. Shop local, shop online.
Mode is an online fashion store that curates a network of independent fashion boutiques in one place, meaning you can shop the biggest selection of boutique NZ fashion, allowing you to shop local without leaving home.

We believe fashion is about creativity, expression and individuality, and yet the industry is dominated by big brands with big reach and big volume.

Which is why we wanted to put the spotlight back on the independent, one-of-a-kind fashion boutiques. The ones who are leading the way locally by following their passion to provide unique, quality clothing and products - and great customer service.
</p>
                                    {/* <div className="testimonial-author">Louise Donovan - CEO</div> */}
                                    
                                </div> 
                            {/* </div>  */}
                        </div> 
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}
