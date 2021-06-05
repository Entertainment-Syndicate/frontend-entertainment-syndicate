/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import Anime from './Anime';
import Game from './Game';
import Movie from './Movie';
import axios from 'axios';
// import './explore.css';

export class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      animeData: [],
      movieData: [],
      gameData: [],

      showAnime: false,
      showMovie: false,
      showGame: false,
      renderedData: [],

      radios: [
        { name: 'All', value: '0' },
        { name: 'Anime', value: '1' },
        { name: 'Movies', value: '2' },
        { name: 'Games', value: '3' },
      ],
      radioValue: 0,
    };
  }

  // Sending a request to the back-end for rendering the data
  componentDidMount = () => {
    axios.get(`http://localhost:3001/fetchAllData`).then((res) => {
      this.setState({
        allData: res.data,

        animeData: [res.data[0], res.data[1], res.data[2], res.data[3]],
        movieData: [res.data[4], res.data[5], res.data[6], res.data[7]],
        gameData: [res.data[8], res.data[9], res.data[10], res.data[11]],

        renderedData: res.data,
      });
    });

    // console.log(this.state.animeData);
  };

  selectType = async (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value == 0) {
      await this.renderAll();
    } else if (e.currentTarget.value == 1) {
      await this.renderAnime();
    } else if (e.currentTarget.value == 2) {
      await this.renderMovie();
    } else if (e.currentTarget.value == 3) {
      await this.renderGame();
    }
  };

  // Need a function for rendering everything
  renderAll = async () => {
    await this.setState({
      renderedData: this.state.allData,
      showAnime: true,
      showMovie: true,
      showGame: true,
    });
    console.log(this.state.renderedData);
  };

  // Need a function for rendering all Anime
  renderAnime = async () => {
    await this.setState({
      renderedData: this.state.animeData,
      showAnime: true,
      showMovie: false,
      showGame: false,
    });
    console.log(this.state.renderedData);
  };

  // Need a function for rendering all movies
  renderMovie = async () => {
    await this.setState({
      renderedData: this.state.movieData,
      showAnime: false,
      showMovie: true,
      showGame: false,
    });
    console.log(this.state.renderedData);
  };

  // Need a function for rendering all Games
  renderGame = async () => {
    await this.setState({
      renderedData: this.state.gameData,
      showAnime: false,
      showMovie: false,
      showGame: true,
    });
    console.log(this.state.renderedData);
  };

  // Need a function for rendering based on what category we select

  // Create a function to add the selected item to my list (related to Database)

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <ButtonGroup>
                {this.state.radios.map((radio, idx) => (
                  <Button
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    // variant={'outline-success'}
                    name="radio"
                    value={radio.value}
                    checked={this.state.radioValue === radio.value}
                    onChange={(e) =>
                      this.setState({
                        radioValue: e.currentTarget.value,
                      })
                    }
                    onClick={this.selectType}
                  >
                    {radio.name}
                  </Button>
                ))}
              </ButtonGroup>

              <NavDropdown title="Search By Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          {this.state.showAnime && (
            <>
              <h2>Anime</h2>
              <Anime animeData={this.state.animeData} />
            </>
          )}
        </div>
        <div>
          {this.state.showMovie && (
            <>
              <h2>Movies</h2>
              <Movie movieData={this.state.movieData} />
            </>
          )}
        </div>
        <div>
          {this.state.showGame && (
            <>
              <h2>Games</h2>
              <Game gameData={this.state.gameData} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default Explore;

// const radios = [
//   { name: 'Active', value: '1' },
//   { name: 'Hello', value: '2' },
//   { name: 'Radio', value: '3' },
// ];

// return (
//   <>
//     <ButtonGroup>
//       {radios.map((radio, idx) => (
//         <ToggleButton
//           key={idx}
//           id={`radio-${idx}`}
//           type="radio"
//           variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//           name="radio"
//           value={radio.value}
//           checked={radioValue === radio.value}
//           onChange={(e) => setRadioValue(e.currentTarget.value)}
//         >
//           {radio.name}
//         </ToggleButton>
//       ))}
//     </ButtonGroup>
//   </>
// );
