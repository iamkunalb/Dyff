import React, { Component } from 'react'
import Slider from 'react-slick'
import armDay from '../images/products/dyff-arm-day.png'
import db from '../Config'


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
                infinite: false,
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

        let gg = [{name: 'hello', price:10}, {name: 'GG', price:30},{name: 'hello', price:10}, {name: 'GG', price:30},{name: 'hello', price:10}, {name: 'GG', price:30}]
        let ff = []
        // let gg = []
        
        // db.collection('products').get().then(
        //   snapshot => {
        //     snapshot.docs.map((doc) => {
        //       // console.log(doc.data().name)
        //       gg.push(
        //         <div style={{textAlign: 'center', display: 'block'}}>
        //         <img height="auto" width="80%" src={armDay} alt="prod1"/>
        //         <h3>{doc.data().name}</h3>
        //         <h3>{doc.data().price}</h3>
        //       </div>
        //       )
        //     })
        //   }
        // )
        // console.log(gg)
          
        for (let i = 0; i < gg.length;i++){
          ff.push(
              <div key={i} style={{textAlign: 'center', display: 'block'}}>
                <img height="auto" width="80%" src={armDay} alt="prod1"/>
                <h3>{gg[i].name}</h3>
                <h3>{gg[i].price}</h3>
              </div>
          )
        }


        return (
          <div style={{margin: '10vh 10vw 10vh 10vw'}}>
            <h2> Popular </h2>
            <Slider {...settings}>
              {ff}
            </Slider>
          </div>
        );
      }
}
