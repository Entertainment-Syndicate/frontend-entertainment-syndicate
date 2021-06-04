import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Anime from './Anime'
import Game from './Game'
import Movie from './Movie'
// import './explore.css';


export class Explore extends Component {

    // constructor(props){
    //     super(props);
    // }


    // Sending a request to the back-end for rendering the data 

    // Need a function for rendering based on what category we select

    // Need a function for rendering everything

    // Need a function for rendering all movies

    // Need a function for rendering all Anime

    // Need a function for rendering all Games

    // Create a function to add the slected item to my list (related to Database)

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                            <NavDropdown title="Search By Category" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Button className='buttons'>All</Button>
                            <Button className='buttons'>Anime</Button>
                            <Button className='buttons'>Movies</Button>
                            <Button className='buttons'>Games</Button>
                            {/* <Nav.Link href="https://www.google.com/">All</Nav.Link>
                            <Nav.Link href="#home">Anime</Nav.Link>
                            <Nav.Link href="#link">Movies</Nav.Link>
                            <Nav.Link href="#home">Game</Nav.Link> */}
                        </Nav>
                        {/* <Form inline>
                            <FormControl type="droplist" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>

                <Anime />
                <Movie />
                <Game />
            </>
        )
    }
}

export default Explore
