import React from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "../index.css"

class ContactPage extends React.Component {
  
componentDidMount(){
   if (document.querySelector(".loading")){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
   }
  }
 
 render() {
    return ( 
	<div>
	<h1>Contact Me </h1>
	<h4 className="Email" > You can email me at anytime at <b> <a href="mailto:jaxfoodtruckfinder@gmail.com" target="_top">jaxfoodtruckfinder@gmail.com</a></b> or submit the form below with your inquiry!</h4>
    <Container className="px-5 py-5">
    <Form className="justify-content-center">
      <FormGroup>
        <Label for="exampleEmail">Contact Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="(Optional)" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Message</Label>
        <Input type="Message" name="text"  id="exampleText" required/>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Message Type</legend>
        <FormGroup inline check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Issue
          </Label>
        </FormGroup>
        <FormGroup inline check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Praise 
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Other
          </Label>
        </FormGroup>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
	</ Container>
	</div>
     )
  }
}
export default ContactPage
