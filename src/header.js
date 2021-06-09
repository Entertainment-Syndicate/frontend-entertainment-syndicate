import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogOutButton';
import LoginButton from './components/LoginButton';
import { withRouter } from 'react-router';

class Header extends React.Component {
  render() {
    const { location } = this.props;
    const { isAuthenticated, user } = this.props.auth0;
    return (
      <Navbar
        className="Navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand
          className="name
        "
        >
          Entertainment Syndicate
        </Navbar.Brand>
        <Link
          className={
            location.pathname === '/'
              ? `active-navbar header-link`
              : `navs header-link`
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            location.pathname === '/explore'
              ? `active-navbar header-link`
              : `navs header-link`
          }
          to="/explore"
        >
          Explore
        </Link>
        <Link
          className={
            location.pathname === '/user'
              ? `active-navbar header-link`
              : `navs header-link`
          }
          to="/user"
        >
          Profile
        </Link>
        <Link
          className={
            location.pathname === '/feed'
              ? `active-navbar header-link`
              : `navs header-link`
          }
          to="/feed"
        >
          Feed
        </Link>
        <Link
          className={
            location.pathname === '/about-us'
              ? `active-navbar header-link`
              : `navs header-link`
          }
          to="/about-us"
        >
          About Us
        </Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated ? (
          <span>
            <LogoutButton className="Button" />
            <Image
              className="profilePicHeader"
              src={user.picture}
              alt={user.name}
              roundedCircle
            />
          </span>
        ) : (
          <LoginButton className="Button" />
        )}
      </Navbar>
    );
  }
}

export default withRouter(withAuth0(Header));
