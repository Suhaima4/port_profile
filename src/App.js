import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        
          
        </Routes>
      </Router> */}
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
