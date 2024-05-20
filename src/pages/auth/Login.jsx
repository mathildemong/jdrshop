import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleLogin(event) {
    event.preventDefault(); // Empêche le rafraîchissement de la page lors de la soumission du formulaire
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion");
      }

      const user = await response.json();
      console.log("Utilisateur connecté :", user);
      // Ici, vous pouvez gérer la logique de redirection ou de stockage de l'utilisateur connecté
    } catch (error) {
      console.error("Erreur :", error);
      // Ici, vous pouvez afficher un message d'erreur à l'utilisateur
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleLogin}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="form1">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" disabled={!validateForm()}>
          Connexion
        </Button>
      </Form>
      <Link to="/Subscribe">
        <Button>Inscription</Button>
      </Link>
    </div>
  );
}

export default Login;