import './App.css';
import AppNavBar from './components/navBar';
import HeaderCover from './components/headerCover'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';

function App() {
  return (
    <Router>
    <div className='mts-website'>
      <HeaderCover />
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
