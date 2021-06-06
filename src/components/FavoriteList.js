import React, { Component } from 'react';
import { Card, Button, CardGroup, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

export class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
      favoriteAnime: [],
      favoriteMovie: [],
      favoriteGame: [],
    };
  }

  // 6- Get Favorite data from database
  // Third request
  componentDidMount = () => {
    let email = this.props.auth0.user.email;
    axios
      .get(`http://localhost:3001/favorite`, { params: { email } })
      .then((res) => {
        this.setState({
          favoriteList: res.data,
          favoriteAnime: res.data.favoriteAnime,
          favoriteMovie: res.data.favoriteMovie,
          favoriteGame: res.data.favoriteGame,
        });
        console.log(this.state.favoriteAnime);
      });
  };

  render() {
    return (
      <div>
        <h2>Anime</h2>
        <CardDeck>
          {this.state.favoriteAnime.map((item, idx) => {
            return (
              <CardGroup key={idx} style={{ width: '18rem' }}>
                <Card>
                  <Card.Img variant="top" src={item.image} />

                  <Card.Body>
                    <Card.Title> {item.title}</Card.Title>
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Date: {item.date}</Card.Text>
                    <Card.Text>Type: {item.type}</Card.Text>
                    <Card.Text>Category: {item.category}</Card.Text>
                    <Card.Text>Episodes: {item.episodes}</Card.Text>
                    <Card.Text>Score: {item.score}</Card.Text>
                    <Card.Text>Rating: {item.rate}</Card.Text>
                    <a href={item.watchURL}>Watch Here</a>
                  </Card.Body>
                </Card>
              </CardGroup>
            );
          })}
        </CardDeck>

        <h2>Movies</h2>
        <CardDeck>
          {this.state.favoriteMovie.map((item, idx) => {
            return (
              <CardGroup key={idx} style={{ width: '18rem' }}>
                <Card>
                  <Card.Img variant="top" src={item.image} />

                  <Card.Body>
                    <Card.Title> {item.title}</Card.Title>
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Date: {item.date}</Card.Text>
                    <Card.Text>Type: {item.type}</Card.Text>
                    <Card.Text>Category: {item.category}</Card.Text>
                    <Card.Text>Vote Average: {item.voteAverage}</Card.Text>
                    <Card.Text>Vote Count: {item.voteCount}</Card.Text>
                    <Card.Text>Popularity: {item.popularity}</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            );
          })}
        </CardDeck>

        <h2>Games</h2>
        <CardDeck>
          {this.state.favoriteGame.map((item, idx) => {
            return (
              <CardGroup key={idx} style={{ width: '18rem' }}>
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title> {item.title}</Card.Title>
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Date: {item.date}</Card.Text>
                    <Card.Text>Type: {item.type}</Card.Text>
                    <Card.Text>Category: {item.category}</Card.Text>
                    <Card.Text>Platform: {item.platform}</Card.Text>
                    <Card.Text>Publisher: {item.publisher}</Card.Text>
                    <Card.Text>Developer: {item.developer}</Card.Text>
                    <a href={item.installingURL}>Install from Here</a>
                  </Card.Body>
                </Card>
              </CardGroup>
            );
          })}
        </CardDeck>
      </div>
    );
  }
}

export default withAuth0(FavoriteList);
