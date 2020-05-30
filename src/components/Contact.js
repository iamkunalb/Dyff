import React, { Component } from 'react'
import '../contact.css'

export default class Contact extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);
	  }
    render() {
        return (
            <React.Fragment>
                <div className="wrap-contact100">
                    <form className="contact100-form validate-form">
                        <span className="contact100-form-title">
                            Contact Us
                        </span>


				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
					<span className="label-input100">Your Name</span>
					<input className="input100" type="text" name="name" placeholder="Enter your name"/>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<span className="label-input100">Email</span>
					<input className="input100" type="text" name="email" placeholder="Enter your email addess"/>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate="Message is required">
					<span className="label-input100">Message</span>
					<textarea className="input100" name="message" placeholder="Your message here..."></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<button className="contact100-form-btn">
						<span>
							Submit
						</span>
					</button>
				</div>
			</form>

			{/* <span className="contact100-more">
				For any question contact our 24/7 call center: <span className="contact100-more-highlight">+001 345 6889</span>
			</span> */}
		</div>
            </React.Fragment>
        )
    }
}
