import React from 'react'
import "../index.css"
import {Form, Input, Container, Button, Label} from 'reactstrap'
import DateTimePicker  from 'react-datetime-picker';

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
	<Container className="px-5 py-5">
	<Form className="justify-content-center" >
      <Label> Foodtruck Name </Label>
      <Input type="text" id="Input-name" />
      <Label> Address </Label>
	    <Input type="email" id="Input-address" placeholder='e.g. "Near 1234 Street" or "1234 Street"'/>
	    <p> Date & Time
      <br/>
	    <i> (currently only support one date submission at a time) </i></p>
	    <DateTimePicker 
	      className="bg-white"
        required
	      onChange={this.onChange}
	      value={this.state.date}
	    /> 
      <br/>
      <Label > Website </Label>
	    <Input className="my-2" type="text" id="Input-website" placeholder="(Optional)"/>
	 <Button type="submit" value="Submit" id="Input-submit">Submit</Button>
	</Form>
	</Container>
	</div>
)
  }
}
export default AddFoodTruckPage
