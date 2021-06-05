import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Anime from './Anime'
import Game from './Game'
import Movie from './Movie'
// import './explore.css';


export class Explore extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMovies : false,
            showAnime : false,
            showGames : false

        }
    }


    // Sending a request to the back-end for rendering the data 

    // Need a function for rendering based on what category we select

    // Need a function for rendering everything

    // Need a function for rendering all movies
    renderMovie = () => {
        this.setState ({
            showMovies: true

        })
    }
    

    // Need a function for rendering all Anime
    renderAnime = () => {
        this.setState ({
            showAnime: true

        })
    }

    // Need a function for rendering all Games
    renderAnime = () => {
        this.setState ({
            showGames: true

        })
    }

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
                                <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
                               
                            </NavDropdown>
                            {/* Button --- Radio Button */}
                            <Button  className='buttons'>All</Button>
                            <Button  onClick={this.renderAnime} className='buttons'>Anime</Button>
                            <Button onClick={this.renderMovie} className='buttons'>Movies</Button>
                            <Button  onClick={this.renderGames} className='buttons'>Games</Button>
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
                <div>
                     {this.state.showAnime && <Anime />}
                </div>
                <div>
                    {this.state.showMovies &&  <Movie />}
                </div>
                <div>
                {this.state.showGames && <Game />}
                </div>

            </>
        )
    }
}

export default Explore
