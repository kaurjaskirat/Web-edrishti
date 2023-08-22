
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import What from './components/What';
import Team from './components/Team';
import Achievement from './components/Achievement';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import { SimpleSlider } from './components/SimpleSlider';

function App() {
  return (
    <div className="App">
   <Navbar/>  
   <Home/>
   <About/>
   <What/>
   {/* <SimpleSlider/> */}
   <Team/>
   
   <Achievement/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
