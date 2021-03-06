
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import DonateDash from './components/DonateDash';
import {Routes,Route} from 'react-router';
import DonationForm from './components/DonationForm';
import DonationType from './components/DonationType';




function App() {
  return (
   <>
   <NavBar/>
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/about" element={<About/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Register/>}/>
     <Route  path="/donateDash" element={<DonateDash/>}/>
     <Route  path="/donationForm" element={<DonationForm/>}/>
     <Route path="/donationType" element={<DonationType/>}/>
     
   </Routes>
   {/* <Home/>
   <About/> */}
  <Footer/> 
   </>
  );
}

export default App;
