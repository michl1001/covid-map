import React from 'react';
import PhoneForm from './phoneForm';
import './style.css';


function Footer(props){
    return(
        <div className="footer">
            <h3 className='header'>Contact Us</h3>

            <div className="contactInfo">
                If you have any questions, contact us at:
                <br></br>
                &#x1F4E7; <a href="mailto:covidvisualizationteam@gmail.com" className="email">covidvisualizationteam@gmail.com</a>
            </div>

            <div className="phoneForm">
                <PhoneForm />
            </div>
        </div>
    );

}

export default Footer;