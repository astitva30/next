import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/slices/authSlice';
import { useRouter } from 'next/router';
import { RootState } from '../redux/store';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const router = useRouter(); // Initialize useRouter
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  const { token, error } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (token) {
      router.push('/homepage'); // Redirect to the homepage
    }
  }, [token, router]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </>
  );
};

export default Login;
