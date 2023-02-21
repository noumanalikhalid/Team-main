import './App.css';
import ModelDetail from './components/ModelDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Discover from './components/Discover'
import Footer from './components/Footer'
import Model911 from './components/Model911';
import ModelTaycan from './components/ModelTaycan';
import ModelPanamera from './components/ModelPanamera';
import ModelMacan from './components/ModelMacan';
import ModelCayenne from './components/ModelCayenne';
import { Built } from './components/PorscheCars/Built';
import { Modify } from './components/Modify/Modify';
import { Account } from './components/Accounts/Account';
import { Login } from './components/Accounts/Login';
import { Signup } from './components/Accounts/Signup';
import { Shop } from './components/Shop/Shop';

const  App = ()=> {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="718" element={<ModelDetail />} />
          <Route path="911" element={<Model911/>} />
          <Route path="Taycan" element={<ModelTaycan/>} />
          <Route path="Panamera" element={<ModelPanamera/>} />
          <Route path="Macan" element={<ModelMacan/> } />
          <Route path="Cayenne" element={<ModelCayenne/>} />
          <Route path='/Built' element={<Built/>}/>
          <Route path='/Modify' element={<Modify/>}/>
          <Route path='/Account'element={<Account/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login'element={<Login/>}/>
          <Route path='/Shop'element={<Shop/>}/>
        </Routes>
        <Discover/>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
