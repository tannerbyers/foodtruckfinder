import React from 'react'
import testfoodtruck from '../assets/testfoodtruck.png'
class AboutPage extends React.Component {
 
  componentDidMount(){
	if(document.querySelector(".loading")){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
   }
  }

 render() {
    return (
	<div className="App">
	<h1>About</h1> 
	<p className="p-5"> Jacksonville food trucks are always on the move, and that’s why we’ve created the most reliable food truck schedule in Jacksonville, FL. Our Jacksonville food truck schedule updates as the food truck owners make changes to their calendars. Food Truck Finder is the only resource that shows you where Jacksonville food trucks are located at any given time!

Hungry yet? Track down a Jacksonville food truck near you!

Oh, and don’t forget to bookmark this page</p>	

	    <img src={testfoodtruck} width="100"/>
	   </div>
    )
  }
}
export default AboutPage
