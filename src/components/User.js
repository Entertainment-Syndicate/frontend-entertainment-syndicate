import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import FavoriteList from './FavoriteList';
// import './CSS-File/user.css'

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Creating function for removing (related to Database)

  // Creating function for feedback (related to Database)

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2> Name: {user.name}</h2>
        <p> Email: {user.email}</p>
        <FavoriteList />
      </div>
    )
  );
};

export default User;
