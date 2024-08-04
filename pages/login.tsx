import React from 'react';
import Login from './components/Login';
import SnackbarComponent from './components/SnackbarComponent';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
      <SnackbarComponent/>
    </div>
  );
};

export default HomePage;
