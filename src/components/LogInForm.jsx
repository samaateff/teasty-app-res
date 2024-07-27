import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Authentication/userSlice';
import { useNavigate } from 'react-router-dom';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate('/home', { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  function handelLogin(e) {
    e.preventDefault();
    if (email && password) dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handelLogin}>
      <label>Email:</label>
      <input
        type='email'
        id='email'
        value={email}
        name='email'
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type='password'
        id='password'
        value={password}
        name='password'
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Log In </button>
    </form>
  );
}

export default LogInForm;
