import React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Cart from './components/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
// import item from './datas/list';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
  <div className="App">
    <Router>
<NavBar/>
<Routes>
  <Route path="/" exact Component={Home}/>
  <Route path="/shop" exact Component={Shop}/>

 <Route path="/login"exact Component={Login}/>
 {/* <Route path="/cart"exact Component={Cart}/> */}
</Routes>
<Footer/>
</Router>
    </div>
  );
}

export default App;
