/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import {
  // Navbar,
  // Nav,
  Button,
  ButtonGroup,
  // ToggleButton,
  // Spinner,
  Form,
} from 'react-bootstrap';
import Anime from './Anime';
import Game from './Game';
import Movie from './Movie';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import './explore.css';

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

      favoriteList: [],

      radios: [
        { name: 'All', value: '0' },
        { name: 'Anime', value: '1' },
        { name: 'Movies', value: '2' },
        { name: 'Games', value: '3' },
      ],
      radioValue: 0,
    };
  }

  // 1-Sending a request to the back-end for rendering the data
  // first request
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

  // 2- target from the radio
  selectType = async (e) => {
    // console.log(e.currentTarget.value);
    if (e.currentTarget.value == 0) {
      // 3-
      await this.renderAll();
    } else if (e.currentTarget.value == 1) {
      // 3-
      await this.renderAnime();
    } else if (e.currentTarget.value == 2) {
      // 3-
      await this.renderMovie();
    } else if (e.currentTarget.value == 3) {
      // 3-
      await this.renderGame();
    }
  };

  // 3-function for rendering everything
  renderAll = async () => {
    await this.setState({
      showAnime: true,
      showMovie: true,
      showGame: true,
    });
  };

  // 3-Need a function for rendering all Anime
  renderAnime = async () => {
    await this.setState({
      showAnime: true,
      showMovie: false,
      showGame: false,
    });
  };

  // 3-Need a function for rendering all movies
  renderMovie = async () => {
    await this.setState({
      showAnime: false,
      showMovie: true,
      showGame: false,
    });
  };

  // 3-Need a function for rendering all Games
  renderGame = async () => {
    await this.setState({
      showAnime: false,
      showMovie: false,
      showGame: true,
    });
  };

  // 4-Function for Filtering by Category
  selectCategory = (e) => {
    // console.log(e.target.value);
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
    // console.log(
    //   this.state.animeData,
    //   this.state.movieData,
    //   this.state.gameData
    // );
  };

  // 5- Function Passed for adding to favorite inside Modal
  //  Second request
  addToFavoriteHandler = async (item) => {
    let responseFavorite = await axios.post('http://localhost:3001/favorite', {
      favouriteData: {
        favoriteItem: item,
        email: this.props.auth0.user.email,
      },
    });
    this.setState({
      favoriteList: responseFavorite.data,
    });
    // console.log(this.state.favoriteList);
  };

  render() {
    return (
      <div>
        <ButtonGroup className="Exploreform">
          {this.state.radios.map((radio, idx) => (
            <Button
              className="buttonhh"
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'outline-danger'}
              name="radio"
              value={radio.value}
              // Functions from Radio Component by Default
              checked={this.state.radioValue === radio.value}
              onChange={(e) =>
                this.setState({
                  radioValue: e.currentTarget.value,
                })
              }
              // 2-
              onClick={this.selectType}
            >
              {radio.name}
            </Button>
          ))}
        </ButtonGroup>

        {/* Form for Category Filtering */}
        <Form className="Exploreform2">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              as="select"
              custom
              name="select"
              className="drop"
              // 4-
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

        {/* show data  or loading spiner  */}
        {this.state.showData ? (
          <div>
            <div>
              {/* show each type data if exist */}

              {this.state.showMovie && (
                <div className="card-div">
                  <hr />

                  <h2 className="h2class">Movies</h2>
                  <hr />

                  <Movie
                    movieData={this.state.movieData}
                    showAnime={this.state.showAnime}
                    showMovie={this.state.showMovie}
                    showGame={this.state.showGame}
                    // 5- Function Passed for adding to favorite inside Modal
                    addToFavoriteHandler={this.addToFavoriteHandler}
                  />
                </div>
              )}
            </div>
            <div>
              {/* show each type data if exist */}

              {this.state.showAnime && (
                <div className="card-div">
                  <hr />

                  <h2 className="h2class">Anime</h2>
                  <hr />

                  <Anime
                    animeData={this.state.animeData}
                    showAnime={this.state.showAnime}
                    showMovie={this.state.showMovie}
                    showGame={this.state.showGame}
                    // 5- Function Passed for adding to favorite inside Modal
                    addToFavoriteHandler={this.addToFavoriteHandler}
                  />
                </div>
              )}
            </div>
            <div>
              {/* show each type data if exist */}

              {this.state.showGame && (
                <div className="card-div">
                  <hr />
                  <h2 className="h2class">Games</h2>
                  <hr />

                  <Game
                    gameData={this.state.gameData}
                    showAnime={this.state.showAnime}
                    showMovie={this.state.showMovie}
                    showGame={this.state.showGame}
                    // 5- Function Passed for adding to favorite inside Modal
                    addToFavoriteHandler={this.addToFavoriteHandler}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="spinner">
            {/* <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" /> */}
            <PacmanLoader
              color="rgba(255, 0, 0, 0.801)"
              loading={true}
              css=""
              size={70}
              className="pacmanLoader"
            />
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(Explore);
