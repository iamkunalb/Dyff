import React, { Component } from 'react'

export default class Login extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <div>
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
                        Login.
                            </h1>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}
