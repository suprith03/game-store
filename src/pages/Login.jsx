import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button>Login with Google</button>
      <Link to="/forgot-password">Forgot Password?</Link>
      <p>Don't have an account? <Link to="/registration">Register here</Link></p>
    </div>
  );
};

export default Login;