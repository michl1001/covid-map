import React from 'react';
import './style.css';


class PhoneForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {number: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({number: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A number was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <div className="prompt">Get SMS alerts for the latest updates:</div>
              <input className="inputPhone" type="tel" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="phoneSubmit" type="submit" value="Submit" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
          </form>
        );
      }
    }

export default PhoneForm;