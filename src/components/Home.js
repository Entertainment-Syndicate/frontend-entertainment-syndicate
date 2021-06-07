import React, { Component } from 'react';
import WatchList from './WatchList';
import HomeFavorite from './HomeFavorite';
import { withAuth0 } from '@auth0/auth0-react';
import Login from '../login';
import Movie from '../image/MovieCover.jpg';
import Game from '../image/GameCover.jpg';
import { Image, Carousel } from 'react-bootstrap';

export class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
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
                marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={Movie}
              alt="https://via.placeholder.com/1920x1080"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{
                width: '100%',
                height: '100vh',
                marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src="http://cdn.wallpaperhi.com/1680x1050/20120307/death%20note%20l%201680x1050%20wallpaper_www.wallpaperhi.com_34.jpg"
              alt="https://via.placeholder.com/1920x1080"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{
                width: '100%',
                height: '100vh',
                marginTop: '-55.6px',
                objectFit: 'cover',
              }}
              src={Game}
              alt="https://via.placeholder.com/1920x1080"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <WatchList />
        {isAuthenticated ? <HomeFavorite /> : <Login />}
      </div>
    );
  }
}

export default withAuth0(Home);
