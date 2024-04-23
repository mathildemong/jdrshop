import React, { useState } from "react";
// import { useEffect } from 'react';
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/Login.css";
import { useAuth } from '../../context/auth-context';

function Login() {
   const { setCredentials } = useAuth();
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// useEffect(() => {
//  const fetchData = async () => {
//    const result = await fetch(`http://localhost:3001/auth/login.json`);
//  const jsonResult = await result.json()
//  setEmail(jsonResult),
//  setPassword(jsonResult),
// }
//  fetchData();
//  },[])

 function validateForm() {
 return email.length > 0 && password.length > 0;
}
 function handleLogin(event) {
 setCredentials({ email, password });
    



    return ( 
    
      <div onClick={handleLogin}>
        
        Hello World 
        
      </div> 
      
    ); 
  }
 return (
  <div className="Login">
     <Form onSubmit={handleLogin}>
    <Form.Group size="lg" controlId="email">
      <Form.Label className="form1">Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
        <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </Form.Group>
   <Button type="submit" disabled={!validateForm()}>Login</Button>
  </Form>
  <Link to="/Subscribe">
     <Button>Subscribe</Button>
     </Link>
  </div>
  );
 }

 
export default Login;