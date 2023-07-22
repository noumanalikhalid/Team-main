import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Discover from './components/Footer/Discover'
import Footer from './components/Footer/Footer'
import { Built } from './components/PorscheCars/Built';
import { Modify } from './components/Modify/Modify';
import { Account } from './components/Accounts/Account';
import { AULogin } from './components/Accounts/AULogin';
import { Signup } from './components/Accounts/Signup';
import { Shop } from './components/Shop/Shop';
import { Order } from './components/Order/Order';
import { EndPage } from './components/Order/EndPage';
import { AdminLogin } from './components/Dashboard/Admin/AdminLogin';
import { AdminHome } from './components/Dashboard/View/AdminHome/AdminHome';
import { Insert } from './components/Dashboard/View/AdminHome/Insert/Main/Insert';
import { AdminModels } from './components/Dashboard/View/AdminHome/Insert/Models/AdminModels';
import { Data } from './components/Dashboard/View/AdminHome/Data/Main/Main';
import { MODELS } from './components/Dashboard/View/AdminHome/Data/Models/Models';
import { UserOrder } from './components/Dashboard/View/AdminHome/User/UserOrder/UserOrder';
import { Users } from './components/Dashboard/View/AdminHome/User/Users/Users';

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
          <Route path="/Login" element={<AULogin/>}/>
          <Route path="/Shop"element={<Shop/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/Accepted" element={<EndPage/>}/>
          <Route path="/Admin" element={<AdminLogin/>}/>
          <Route path="/Dashboard" element={<AdminHome/>}/>
          <Route path='/Admin/Insert' element={<Insert/>}/>
          <Route path='/Admin/InsertAdmin' element={<AdminModels/>}/>
          <Route path='/Admin/Data' element={<Data/>}/>
          <Route path="/Admin/ModelData" element={<MODELS/>}/>
          <Route path="/Admin/Users" element={<Users/>}/>
          <Route path="/Admin/UserOrder" element={<UserOrder/>}/>
        </Routes>
        <Discover/>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
