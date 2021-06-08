import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './WatchList.css';
import { Card, CardGroup } from 'react-bootstrap';

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomAnime1: [],
      randomAnime2: [],
      randomMovie1: [],
      randomMovie2: [],
    };
  }
  componentDidMount = async () => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=&genre=1&order_by=score`)
      .then((res) => {
        let animeArr = res.data.results.splice(0, 20);
        let randomNumber1 = Math.floor(Math.random() * 10);
        let randomNumber2 = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
        this.setState({
          randomAnime1: animeArr[randomNumber1],
          randomAnime2: animeArr[randomNumber2],
        });
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=28`
      )
      .then((res) => {
        let movieArr = res.data.results.splice(0, 20);
        let randomNumber1 = Math.floor(Math.random() * 10);
        let randomNumber2 = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
        this.setState({
          randomMovie1: movieArr[randomNumber1],
          randomMovie2: movieArr[randomNumber2],
        });
      });

    // let res = await axios.get(
    //   `https://www.freetogame.com/api/games?category=action`
    // );
    // // ((res) => {
    // console.log(' inside game', res);
    // let gameArr = res.data.splice(0, 10);
    // let randomNumber = Math.floor(Math.random() * 10);
    // console.log(gameArr);
    // this.setState({
    //   randomGame: gameArr[randomNumber],
    // });
    // // })
    // // .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        {/* {this.state.randomMovie2 && this.state.randomMovie2.length && ( */}
        <div className="card-div">
          <h2>Explore Our Collections</h2>
          <CardGroup className="card-group">
            <Card className="card-home">
              <Card.Img variant="top" src={this.state.randomAnime1.image_url} />

              <Card.Body>
                <Card.Title> {this.state.randomAnime1.title}</Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-home">
              <Card.Img variant="top" src={this.state.randomAnime2.image_url} />

              <Card.Body>
                <Card.Title> {this.state.randomAnime2.title}</Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-home">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${this.state.randomMovie1.poster_path}`}
              />

              <Card.Body>
                <Card.Title> {this.state.randomMovie1.title}</Card.Title>
              </Card.Body>
            </Card>

            <Card className="card-home">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${this.state.randomMovie2.poster_path}`}
              />

              <Card.Body>
                <Card.Title> {this.state.randomMovie2.title}</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default WatchList;
