import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Information from './pages/Information';
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <BrowserRouter> */}
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Contact'} element={<Contact/>}/>
        <Route path={'/Guide'} element={<Guide/>}/>
        <Route path={'/Information'} element={<Information/>}/>
      </Routes>
     {/* </BrowserRouter> */}
     <Footer/>
    </div>
  );
}

export default App;
