import React from 'react'
import "../index.css"
class AddFoodTruckPage  extends React.Component {

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
	<form class="">
	    <input type="text" id="input-name" placeholder="Foodtuck Name"/>
	    <input type="email" id="input-address" placeholder="Address"/>
	    <input type="text" id="input-hours" placeholder="Hours (any format)"/>
	    <input type="text" id="input-website" placeholder="Website"/>
	  <input type="submit" value="Submit" id="input-submit"/>
	</form>
	</div>
)
  }
}
export default AddFoodTruckPage
