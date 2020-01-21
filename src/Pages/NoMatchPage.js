import React from "react"
import {Container, Row, Col, Button } from "reactstrap"
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
	<h1>404 Page Not Found</h1> 
	<Container>
	<Row>
	<Col>
	<img src={FoodtruckIcon} />
	</Col>
	<Col className="my-auto justify-content-center" >
	<p> Unforntately this page is not found </p>	
    <a href="/"> <Button className="bg-primary"> Go Home </Button></a>
	</Col>
	</Row>
	</Container> 
	</div>
    )
  }
}
export default AboutPage
