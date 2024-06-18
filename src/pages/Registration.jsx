import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="registration-page">
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <button>Register with Google</button>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Registration;