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



// <section className="section-slide">
//                 <div className="wrap-slick1">
//                     <div className="slick1">
//                         <div className="item-slick1" style={{backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/karlie-kloss-is-seen-wearing-a-baby-blue-ralph-lauren-news-photo-1575557364.jpg)'}}>
//                             <div className="container h-full">
//                                 <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
//                                     <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
//                                         <span className="ltext-101 cl2 respon2">
//                                             Women Collection 2018
//                                         </span>
//                                     </div>

//                                     <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
//                                         <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
//                                             NEW SEASON
//                                         </h2>
//                                     </div>

//                                     <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
//                                         <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
//                                             Shop Now
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="item-slick1" style={{backgroundImage: 'url(https://static3.fashionbeans.com/wp-content/uploads/2017/09/aw17trendstop-8.jpg)'}}>
//                             <div className="container h-full">
//                                 <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
//                                     <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay="0">
//                                         <span className="ltext-101 cl2 respon2">
//                                             Men New-Season
//                                         </span>
//                                     </div>

//                                     <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay="800">
//                                         <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
//                                             Jackets & Coats
//                                         </h2>
//                                     </div>

//                                     <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay="1600">
//                                         <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
//                                             Shop Now
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="item-slick1" style={{backgroundImage: 'url(https://cms.qz.com/wp-content/uploads/2017/08/andamen-3.jpg?quality=75&strip=all&w=1600&h=900&crop=1)'}}>
//                             <div className="container h-full">
//                                 <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
//                                     <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay="0">
//                                         <span className="ltext-101 cl2 respon2">
//                                             Men Collection 2018
//                                         </span>
//                                     </div>

//                                     <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay="800">
//                                         <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
//                                             New arrivals
//                                         </h2>
//                                     </div>

//                                     <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay="1600">
//                                         <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
//                                             Shop Now
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>