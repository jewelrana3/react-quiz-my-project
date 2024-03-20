import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import From from "./From";
import TextInput from "./TextInput";

export default function LoginForm() {
  const { login } = useAuth();
  const history = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  //   handle submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      setLoading(false);
      setError("Failed to login an account");
      console.log(err);
    }
  }

  return (
    <From onSubmit={handleSubmit} style={{ height: "330px" }} action="#">
      <TextInput
        type="text"
        placeholder="Enter email"
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
      <Button type="button" disabled={loading}>
        Submit Now
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link href="/signup">Signup</Link> instead.
      </div>
    </From>
  );
}
