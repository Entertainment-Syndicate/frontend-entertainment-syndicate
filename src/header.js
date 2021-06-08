import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogOutButton';
import LoginButton from './components/LoginButton';
import { withRouter } from 'react-router';
class Header extends React.Component {
  render() {
    const { router, params, location, routes } = this.props;
    const { isAuthenticated } = this.props.auth0;
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
          className={location.pathname === '/' ? `active-navbar` : `navs`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            location.pathname === '/explore' ? `active-navbar` : `navs`
          }
          to="/explore"
        >
          Explore
        </Link>
        <Link
          className={location.pathname === '/user' ? `active-navbar` : `navs`}
          to="/user"
        >
          Profile
        </Link>
        <Link
          className={
            location.pathname === '/about-us' ? `active-navbar` : `navs`
          }
          to="/about-us"
        >
          About Us
        </Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated ? (
          <LogoutButton className="Button" />
        ) : (
          <LoginButton className="Button" />
        )}
      </Navbar>
    );
  }
}

export default withRouter(withAuth0(Header));
