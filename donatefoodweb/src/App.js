
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import {Routes,Route} from 'react-router';

function App() {
  return (
   <>
   <NavBar/>
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/about" element={<About/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Register/>}/>
     
   </Routes>
   {/* <Home/>
   <About/> */}
  <Footer/> 
   </>
  );
}

export default App;
