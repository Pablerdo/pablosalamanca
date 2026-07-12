import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Photos from './pages/Photos';

function App() {
  return (
      <HashRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
