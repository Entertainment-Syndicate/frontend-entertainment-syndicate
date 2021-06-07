import React, { Component } from 'react';
import WatchList from './WatchList';
import HomeFavorite from './HomeFavorite';
import { withAuth0 } from '@auth0/auth0-react';
import Login from '../login';
import Image from 'react-bootstrap/Image';

export class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="https://via.placeholder.com/1920x1080"
        />
        <WatchList />
        {isAuthenticated ? <HomeFavorite /> : <Login />}
      </div>
    );
  }
}

export default withAuth0(Home);
