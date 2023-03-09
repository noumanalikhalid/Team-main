import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Discover from './components/Footer/Discover'
import Footer from './components/Footer/Footer'
import { Built } from './components/PorscheCars/Built';
import { Modify } from './components/Modify/Modify';
import { Account } from './components/Accounts/Account';
import { Login } from './components/Accounts/Login';
import { Signup } from './components/Accounts/Signup';
import { Shop } from './components/Shop/Shop';
import { CarPage } from './components/CarPage/CarPage';
import { Order } from './components/Order/Order';
import { EndPage } from './components/Order/EndPage';
import { AdminLogin } from './components/Dashboard/Admin/AdminLogin';

const  App = ()=> {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Built" element={<Built/>}/>
          <Route path="/Modify" element={<Modify/>}/>
          <Route path="/Account"element={<Account/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login"element={<Login/>}/>
          <Route path="/Shop"element={<Shop/>}/>
          <Route path="/Car" element={<CarPage/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/Accepted" element={<EndPage/>}/>
          <Route path="/Admin" element={<AdminLogin/>}/>
        </Routes>
        <Discover/>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
