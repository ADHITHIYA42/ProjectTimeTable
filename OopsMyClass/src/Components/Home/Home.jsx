import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';

const Home = () => {
  const { user, login, logout } = useUser();

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
          <Link to="/profile">Go to Profile</Link>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
