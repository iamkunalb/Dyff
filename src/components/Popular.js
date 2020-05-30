import React, { Component } from 'react'
import Slider from 'react-slick'
import armDay from '../images/products/dyff-arm-day.png'


export default class Popular extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 0,
          arrows: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div style={{margin: '10vh 10vw 10vh 10vw'}}>
            <h2> Popular </h2>
            <Slider {...settings}>
              <div style={{textAlign: 'center', display: 'block'}}>
                <img height="auto" width="80%" src={armDay} alt="prod1"/>
                <h3 >1</h3>
              </div>
              <div>
                <img height="auto" width="80%" src={armDay} alt="prod1"/>

                <h3 >2</h3>
              </div>
              <div>
              <img height="auto" width="80%" src={armDay} alt="prod1"/>
                <h3 >3</h3>
              </div>
              <div>
              <img height="auto" width="80%"  src={armDay} alt="prod1"/>
                <h3 >4</h3>
              </div>
              <div>
              <img height="auto" width="80%"  src={armDay} alt="prod1"/>
                <h3 >5</h3>
              </div>
              <div>
              <img height="auto" width="80%"  src={armDay} alt="prod1"/>
                <h3 >6</h3>
              </div>
              <div>
              <img height="auto" width="80%"  src={armDay} alt="prod1"/>
                <h3 >7</h3>
              </div>
              <div>
              <img height="auto" width="80%"  src={armDay} alt="prod1"/>
                <h3 >8</h3>
              </div>
            </Slider>
          </div>
        );
      }
}
