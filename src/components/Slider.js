import React, { Component } from 'react'
import '../util.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slideer from 'react-slick'
import slider1 from '../images/slide-01.jpg'
import slider2 from '../images/slide-02.jpg'
import slider3 from '../images/slide-03.jpg'

export default class Slider extends Component {
    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            fade: true,
            arrows: false
        }
        return (
            <Slideer {...settings}>
                <div style={{position:'relative', height:'600px'}}>
                    <div style={{position:'absolute'}}>
                        {/* <h1 >Hello 1</h1> */}
                    </div>
                    <img width="100%" src={slider1} alt="sliderPic"/>
                </div>
                <div>
                {/* <h1 style={{position:'absolute'}}>Hello 2</h1> */}
                    <img width="100%" src={slider2} alt="sliderPic"/>
                </div>
                <div>
                {/* <h1 style={{position:'absolute'}}>Hello 3</h1> */}
                    <img width="100%" src={slider3} alt="sliderPic"/>
                </div>
            </Slideer>
        )
    }
}