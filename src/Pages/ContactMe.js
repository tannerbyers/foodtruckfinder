import React from 'react'
class ContactPage extends React.Component {
  
componentDidMount(){
   if (document.querySelector(".loading")){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
   }
  }
 
 render() {
    return <h1>Contact Page :D </h1>
  }
}
export default ContactPage
