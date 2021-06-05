import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MyFavoriteBooks from './myFavoriteBooks';
import Login from './login';
import User from './components/User';
import LogoutButton from './components/LogOutButton';
import Explore from './components/Explore';
import { AboutUs } from './components/AboutUs';

class App extends React.Component {
  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              {/* <Route path="/">
                Home
              </Route> */}
              
              <Route path="/explore">
                <Explore/>
              </Route>
              
              <Route path="/user">
               <User/>
              </Route>
              
              <Route path="/about-us">
                <AboutUs/>
              </Route>
              
              <Route>
              {isAuthenticated ? <LogoutButton/> : <Login/>}
              </Route>

              {/* <Route exact path="/"> */}
                {/* /* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                 {/* {isAuthenticated ? <MyFavoriteBooks /> : <Login />} */}
              {/* </Route> 
              <Route exact path="/user">
                TODO: add a route with a path of '/profile' that renders a `Profile` component
                <User />
              </Route>  */}
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
