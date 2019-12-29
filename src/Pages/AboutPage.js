import React from "react"
import {Container, Row, Col} from "reactstrap"
import FoodtruckIcon from "../assets/food-truck.png"

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
	<Container>
	<Row>
	<Col>
	<img src={FoodtruckIcon} />
	</Col>
	<Col>
	<p className="p-5 "> Jacksonville food trucks are always on the move, and that’s why we’ve created the most reliable food truck schedule in Jacksonville, FL. Our Jacksonville food truck schedule updates as the food truck owners make changes to their calendars. Food Truck Finder is the best resource that shows you where Jacksonville food trucks are located at any given time!

Hungry yet? Track down a Jacksonville food truck near you!

Oh, and don’t forget to bookmark this page</p>	
	</Col>
	</Row>
	</Container> 
	</div>
    )
  }
}
export default AboutPage
