import React from 'react';
import '../css/styles.css';

const AuthModal = ({ onLogin }) => (
  <div id="authModal">
    <form onSubmit={(e) => {
      e.preventDefault();
      onLogin(e.target.username.value, e.target.password.value);
    }}>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default AuthModal;