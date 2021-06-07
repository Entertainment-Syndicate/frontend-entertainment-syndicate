import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, CardGroup } from 'react-bootstrap';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomAnime: [],

      randomMovie: [],
      randomGame: [],
    };
  }
  componentDidMount = async () => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=&genre=1&order_by=score`)
      .then((res) => {
        let animeArr = res.data.results.splice(0, 10);
        let randomNumber = Math.floor(Math.random() * 10);

        this.setState({
          randomAnime: animeArr[randomNumber],
        });
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=28`
      )
      .then((res) => {
        let MovieArr = res.data.results.splice(0, 10);
        let randomNumber = Math.floor(Math.random() * 10);

        this.setState({
          randomMovie: MovieArr[randomNumber],
        });
      });

    let res = await axios.get(
      `https://www.freetogame.com/api/games?category=action`
    );

    //   ((res) => {
    console.log(' inside game', res);
    // let gameArr = res.data.splice(0, 10);
    // let randomNumber = Math.floor(Math.random() * 10);
    // console.log(gameArr);
    // this.setState({
    //   randomGame: gameArr[randomNumber],
    // });
    //   })
    //   .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <CardGroup style={{ width: '18rem' }}>
          <Card>
            <Card.Img variant="top" src={this.state.randomAnime.image_url} />

            <Card.Body>
              <Card.Title> {this.state.randomAnime.title}</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup style={{ width: '18rem' }}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${this.state.randomMovie.poster_path}`}
            />

            <Card.Body>
              <Card.Title> {this.state.randomMovie.title}</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup style={{ width: '18rem' }}>
          <Card>
            <Card.Img variant="top" src={this.state.randomGame.thumbnail} />

            <Card.Body>
              <Card.Title> {this.state.randomGame.title}</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Home;
