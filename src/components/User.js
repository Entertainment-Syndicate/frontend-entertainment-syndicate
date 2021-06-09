import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import FavoriteList from './FavoriteList';
import '../CSS/FavoriteList.css';
import './user.css';

const User = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return isAuthenticated ? (
    <div>
      <div className="userHeader">
        <div className="user-profile">
          <img id="profilePicture" src={user.picture} alt={user.name} />
          <div>
            <h2 className="userh2"> Name: {user.name}</h2>
            <p> Email: {user.email}</p>
          </div>
        </div>
      </div>
      <div className="FavCards">
        <FavoriteList />
      </div>
    </div>
  ) : (
    <div>
      <div className="userborderPRO">
        <h3 className="userh3PRO">Please Log In </h3>
        <button className="userloginPRO" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default User;
