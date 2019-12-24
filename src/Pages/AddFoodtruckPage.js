import React from 'react'
import "../index.css"

import DateTimePicker from 'react-datetime-picker';

class AddFoodTruckPage  extends React.Component {
constructor(props) {
  super(props);
  this.state = {date: new Date()};
}


onChange = date => this.setState({ date })
  componentDidMount(){
	if(document.querySelector(".loading")){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
   }
  }

  render() {
    return (
	<div>
	<h1>Add Your Food Truck Here!</h1>
	<form class="formInput">
	    <input type="text" id="input-name" placeholder="Foodtuck Name"/>
	    <input type="email" id="input-address" placeholder="Address"/>
	    <p> Date & Time
	    <i> (currently only support one date submission at a time) </i></p>
	    <DateTimePicker 
	      onChange={this.onChange}
	      value={this.state.date}
	    />
	    <input type="text" id="input-website" placeholder="Website (Optional)"/>
	  <input type="submit" value="Submit" id="input-submit"/>
	</form>
	</div>
)
  }
}
export default AddFoodTruckPage
