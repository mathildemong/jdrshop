import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/Subscribe.css";
import { useAuth } from '../../context/auth-context';


// //  const submit= async () => {
// const myData{
//    name, 
//    adress,
//    email,
 // password,

//    }
//       const result = await fetch(`http://localhost:3001/auth/subscribe',{
//    method :'POST',
//    headers: {
//    'Content-type':'application/json'
//       },
//    body: JSON.stringify(myData)
//    })
//    const resultInJson = await result.json();
//    console.log(resultInJson)
//    }
   

function Subscribe() {
const { setCredentials } = useAuth();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [adress, setAdress] = useState("");
function validateForm() {
 return email.length > 0 && password.length > 0;
}
 function handleSubmit() {
   setCredentials({ email, password, name, adress});
  }

 return (
  <div className="Subscribe">
     <Form onSubmit={handleSubmit}>
     <Form.Group size="lg" controlId="name">
      <Form.Label className="name">Name</Form.Label>
      <Form.Control autoFocus type="name" value={name} onChange={(e) => setName(e.target.value)} />
     </Form.Group>
     <Form.Group size="lg" controlId="adress">
      <Form.Label className="adress">Adresse</Form.Label>
      <Form.Control autoFocus type="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
     </Form.Group>
    <Form.Group size="lg" controlId="email">
      <Form.Label className="email">Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
     <Form.Group size="lg" controlId="confemail">
      <Form.Label className="confemail">Confirm Email</Form.Label>
      <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </Form.Group>
        <Form.Group size="lg" controlId="password">
        <Form.Label className="pswd">Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </Form.Group>
     <Form.Group size="lg" controlId="confpassword">
        <Form.Label className="confpswd">Confirm Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
     </Form.Group>
     <Button type="subscribe" disabled={!validateForm()}>Suscribe</Button>
    
  </Form>
  </div>
  );
 }

 
export default Subscribe;