import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Summary from './components/Summary';
import NotFound from './components/NotFound';
import Header from './components/Header'; // Import the new Header component
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Header /> 
        <main style={{ padding: '10px 50px' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Summary" element={<Summary />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </main>
        <footer id="footer"><h5>&copy; Thollarkings 2024</h5></footer>
      </div>
    </Router>
  );
}

export default App;