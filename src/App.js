import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Abc from './Abc';
import Bbc from './Bbc';
import Ccd from './Ccd';


function App() {
  return (
    <Router>
      <div>
        <Menu />

        <Routes>
              <Route path="/abc" element={<Abc/>} />
                <Route path="/bbc" element={<Bbc />} />
             <Route path="/ccd" element={<Ccd />} />  </Routes>
        
      </div>
    </Router>
  );
}

export default App;
