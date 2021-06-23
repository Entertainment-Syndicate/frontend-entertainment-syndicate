import React, { Component } from 'react';
import WatchList from './HomeWatch';
import HomeFavorite from './HomeFavorite';
import { withAuth0 } from '@auth0/auth0-react';
import Login from '../login';
import Movie from '../image/MovieCover.jpg';
import Game from '../image/GameCover2.jpg';
import Anime from '../image/AnimeCover.jpg';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';

export class Home extends Component {

  render() {
    const { isAuthenticated, loginWithRedirect } = this.props.auth0;

    return (
      <div>
        {/* <img
          style={{ width: '100%', height: '100vh', marginTop: '-55.6px' }}
          src="https://via.placeholder.com/1920x1080"
          alt="https://via.placeholder.com/1920x1080"
        /> */}
        <Carousel interval={4000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{
                width: '100%',
                height: '100vh',
                // marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={Movie}
              alt="https://via.placeholder.com/1920x1080"
            />
            <Carousel.Caption>
              <h1>Movie Collections</h1>
              <h3>Explore the best movies from around the world!</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{
                width: '100%',
                height: '100vh',
                // marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={Anime}
              alt="https://via.placeholder.com/1920x1080"
            />

            <Carousel.Caption>
              <h1>Anime Collections</h1>
              <h3>Best animes of all categories for all ages!</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{
                width: '100%',
                height: '100vh',
                // marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={Game}
              alt="https://via.placeholder.com/1920x1080"
            />

            <Carousel.Caption>
              <h1>Game Collections</h1>
              <h3>Live your imagination in reality!</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <WatchList />
        {isAuthenticated ? (
          <HomeFavorite />
        ) : (
          <div>
            <hr />
            <h2 className="h2class"> Your Favorite List!</h2>
            <hr />
            <div className="userborder">
              <h3 className="userh3">
                Please Log In to see your favorite list
              </h3>
              <button className="userlogin" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(Home);
