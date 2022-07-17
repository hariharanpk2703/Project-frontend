// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Tourism from './Components/Tourism';
import Fitness from './Components/Fitness'
import Headlines from './Components/Headlines';
import Food from './Components/Food';
import Technology from './Components/Technology';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Headlines/>} />
        <Route path="/headlines" element={<Headlines/>} />
        <Route path="/fitness" element={<Fitness/>} />
        <Route path="/tourism" element={<Tourism/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="/food" element={<Food/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
