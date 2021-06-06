/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Button,
  ButtonGroup,
  ToggleButton,
  Spinner,
  Form,
} from 'react-bootstrap';
import Anime from './Anime';
import Game from './Game';
import Movie from './Movie';
import axios from 'axios';

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

      showData: false,

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
        showData: true,

        animeData: [res.data[0], res.data[1], res.data[2], res.data[3]],
        movieData: [res.data[4], res.data[5], res.data[6], res.data[7]],
        gameData: [res.data[8], res.data[9], res.data[10], res.data[11]],
      });
      this.renderAll();
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
      showAnime: true,
      showMovie: true,
      showGame: true,
    });
  };

  // Need a function for rendering all Anime
  renderAnime = async () => {
    await this.setState({
      showAnime: true,
      showMovie: false,
      showGame: false,
    });
  };

  // Need a function for rendering all movies
  renderMovie = async () => {
    await this.setState({
      showAnime: false,
      showMovie: true,
      showGame: false,
    });
  };

  // Need a function for rendering all Games
  renderGame = async () => {
    await this.setState({
      showAnime: false,
      showMovie: false,
      showGame: true,
    });
  };

  selectCategory = (e) => {
    console.log(e.target.value);
    let allData = this.state.allData;

    if (e.target.value == 'All') {
      this.setState({
        animeData: [allData[0], allData[1], allData[2], allData[3]],
        movieData: [allData[4], allData[5], allData[6], allData[7]],
        gameData: [allData[8], allData[9], allData[10], allData[11]],
      });
    } else if (e.target.value == 'Action') {
      this.setState({
        animeData: [allData[0]],
        movieData: [allData[4]],
        gameData: [allData[8]],
      });
    } else if (e.target.value == 'Fantasy') {
      this.setState({
        animeData: [allData[1]],
        movieData: [allData[5]],
        gameData: [allData[9]],
      });
    } else if (e.target.value == 'Horror') {
      this.setState({
        animeData: [allData[2]],
        movieData: [allData[6]],
        gameData: [allData[10]],
      });
    } else if (e.target.value == 'Sci-Fi') {
      this.setState({
        animeData: [allData[3]],
        movieData: [allData[7]],
        gameData: [allData[11]],
      });
    }
    console.log(
      this.state.animeData,
      this.state.movieData,
      this.state.gameData
    );
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
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
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    as="select"
                    custom
                    name="select"
                    onChange={this.selectCategory}
                  >
                    <option value="" disabled defaultValue>
                      Select your category
                    </option>
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.state.showData ? (
          <div>
            <div>
              {this.state.showAnime && (
                <div>
                  <h2>Anime</h2>
                  <Anime
                    animeData={this.state.animeData}
                    showAnime={this.state.showAnime}
                    showMovie={this.state.showMovie}
                    showGame={this.state.showGame}
                  />
                </div>
              )}
            </div>
            <div>
              {this.state.showMovie && (
                <div>
                  <h2>Movies</h2>
                  <Movie
                    movieData={this.state.movieData}
                    showAnime={this.state.showAnime}
                    showMovie={this.state.showMovie}
                    showGame={this.state.showGame}
                  />
                </div>
              )}
            </div>
            <div>
              {this.state.showGame && (
                <div>
                  <h2>Games</h2>
                  <Game
                    gameData={this.state.gameData}
                    showAnime={this.state.showAnime}
                    showMovie={this.state.showMovie}
                    showGame={this.state.showGame}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </div>
        )}
      </div>
    );
  }
}

export default Explore;
