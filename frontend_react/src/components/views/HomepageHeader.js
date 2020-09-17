// import library and CSS
import React from "react";
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/homepage.css'

class homepageHeader extends React.Component{
    state={
        SessionID_Valid:false,
    }

    componentDidMount() {
        if (sessionStorage.getItem('SessionID') === null || sessionStorage.getItem('SessionID') === ''){
            this.setState({SessionID_Valid:false})
        }else{
            this.setState({SessionID_Valid:true})
        }
        console.log(sessionStorage.getItem('SessionID'))
    }

    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><span className='homepage_header_h1'>Novel</span></Navbar.Brand>&nbsp;&nbsp;
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/NovelHome">Novel</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar>
            </div>
        );
    }
}
export default homepageHeader