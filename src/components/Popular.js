import React, { Component } from 'react'
import Slider from 'react-slick'
import armDay from '../images/products/dyff-arm-day.png'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Popular extends Component {
  constructor(props){
    super(props);
    this.state={
      ahs: this.props.itemsFromNav
    }
  }
  
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

        let ff = []
        let pp = this.state.ahs;

        pp.map((ite, index) => {
          let namee = ite.name.split(' ').join('-');
          ff.push(
            <div key={index} style={{textAlign: 'center', display: 'block'}}>
              <Link to={"/men/"+namee}>
                <img height="auto" width="80%" src={require('../images/products/' + ite.image)} alt="prod1"/>
                  {/* <img id="prodImage" style={{height: '100%', width: '100%'}} src={require('../images/products/' + doc.image)} alt="IMG-PRODUCT"/> */}
              </Link>  
              <h3>{ite.name}</h3>
              <h3>{ite.price}</h3>
            </div>
          )
      })

        return (
          <div style={{margin: '10vh 10vw 10vh 10vw'}}>
            
            <Slider {...settings}>
              {ff}
            </Slider>
          </div>
        );
      }
}

function mapStateToProps(state){
  return{
      itemsFromNav: state.forSale
  }
}

export default connect(mapStateToProps)(Popular)

