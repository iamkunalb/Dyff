import React, { Component } from 'react'
import slider2 from '../images/slide-02.jpg'
import '../about.css'

export default class About extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <React.Fragment>
                {/* <div style={{position:'relative', textAlign: 'center', maxHeight: '400px', overflow: 'hidden'}} className="d-xl-none">
                    <img  width="100%" style={{minWidth: '300px'}} height="auto" src={slider2} alt="sliderPic"/>
                </div>
            
                <div style={{position:'relative', textAlign: 'center', maxHeight: '500px', overflow: 'hidden'}} className="d-none d-xl-block">
                    <img  width="80%" style={{minWidth: '300px'}} height="auto" src={slider1} alt="sliderPic"/>
                </div> */}
                <div style={{width: '100%'}}>
                <div style={{display: 'table', width: '80%', margin: '0 auto', position:'relative', textAlign: 'center', maxHeight: '400px', overflow: 'hidden', backgroundColor: 'black', color:'white', height: 150}}>
                        <div style={{display: 'table-cell', verticalAlign: 'middle', color: 'white'}}>
                            <h1 style={{color: 'white'}}>
                        Charities.
                            </h1>
                        </div>
                    </div>
                </div>

                <div id="intro" class="basic-1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="text-container">
                                    <div class="section-title">ABOUT US</div>
                                    <h2>We Offer Some Of The Best Business Growth Services In Town</h2>
                                    <p>Discover the best of independent NZ fashion. Shop local, shop online.
Mode is an online fashion store that curates a network of independent fashion boutiques in one place, meaning you can shop the biggest selection of boutique NZ fashion, allowing you to shop local without leaving home.

We believe fashion is about creativity, expression and individuality, and yet the industry is dominated by big brands with big reach and big volume.

Which is why we wanted to put the spotlight back on the independent, one-of-a-kind fashion boutiques. The ones who are leading the way locally by following their passion to provide unique, quality clothing and products - and great customer service.
</p>
                                    {/* <div class="testimonial-author">Louise Donovan - CEO</div> */}
                                    
                                </div> 
                            </div> 
                            <div class="col-lg-7" style={{marginTop: '50px'}}>
                                <div class="image-container">
                                    <img class="img-fluid" src={slider2} alt="alternative"/>
                                </div> 
                            </div> 
                            

                            

                            <div class="col-lg-5" style={{marginTop: '50px'}}>
                                <div class="text-container">
                                    <div class="section-title">MISSION</div>
                                    <h2>Donating 25% of all sales to charity</h2>
                                    <p>Discover the best of independent NZ fashion. Shop local, shop online.
Mode is an online fashion store that curates a network of independent fashion boutiques in one place, meaning you can shop the biggest selection of boutique NZ fashion, allowing you to shop local without leaving home.

We believe fashion is about creativity, expression and individuality, and yet the industry is dominated by big brands with big reach and big volume.

Which is why we wanted to put the spotlight back on the independent, one-of-a-kind fashion boutiques. The ones who are leading the way locally by following their passion to provide unique, quality clothing and products - and great customer service.
</p>
                                    {/* <div class="testimonial-author">Louise Donovan - CEO</div> */}
                                    
                                </div> 
                            </div> 
                            <div class="col-lg-7" style={{marginTop: '100px'}}>
                                <div class="image-container">
                                    <img class="img-fluid" src={slider2} alt="alternative"/>
                                </div> 
                            </div> 
                        </div> 

                    </div> 
                </div>

                
            </React.Fragment>
        )
    }
}
