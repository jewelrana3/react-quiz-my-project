import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./From";

import { useAuth } from "../contexts/AuthContext";
import TextInput from "./TextInput";

export default function SignupForm() {
  const { signup } = useAuth();
  const history = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

  //   handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("The passwords don't match");
    }
    try {
      setError(null);
      setLoading(true);
      await signup(email, password, username);
      history("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to create an account");
      console.log(err);
    }
  }

  return (
    <From style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextInput
        type="text"
        placeholder="Enter Email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter Confirm password"
        icon="lock_clock"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        text="I agree to the Terms & Conditions"
        required
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />

      <Button type="submit" disabled={loading}>
        Submit Now
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </From>
  );
}
