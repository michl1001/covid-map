import React from 'react';
import NumberFormat from 'react-number-format';
import './style.css';


class PhoneForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numberString:'',
            number: 0
        };
        
        this.prevState = '';
        this.submitMessage = '';
        this.submitted = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(values) {
        if(values.value !== this.prevState){
            this.prevState = this.state.number;
            this.setState({
                numberString: values.value,
                number: values.floatValue,
                submitted: false
            });
        }
      }
    
      handleSubmit(event) {
        if( this.state.numberString.length === 10 && !isNaN(this.state.numberString) ){
            this.prevState = '';
            this.submitMessage = "Phone Number submitted! Submit another?";
            alert("success, got: " + this.state.numberString);
        }
        else{
            this.submitMessage = "Please enter a valid number: (Example: (XXX)-XXX-XXXX)"
        }

        this.setState({
            numberString:'',
            number: 0,
            submitted: true
        });
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <div className="prompt">{this.state.submitted ? this.submitMessage:"Get SMS alerts for the latest updates:"}</div>
              <NumberFormat 
                type="tel" 
                className="inputPhone" 
                format="+1 (###) ###-####" 
                allowEmptyFormatting mask=" " 

                getInputRef = {(refer) => this.inputPhone = refer}
                value={this.state.value} 
                onValueChange={(values) => {this.handleChange(values)}}
              />
            </label>
            <input className="phoneSubmit" type="submit" value="Submit" />
          </form>
        );
      }
    }

export default PhoneForm;