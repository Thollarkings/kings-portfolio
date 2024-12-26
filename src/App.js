import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd'; // Import Ant Design Layout and Menu components
import { motion } from 'framer-motion'; // Ensure framer-motion is still imported
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Summary from './components/Summary';
import NotFound from './components/NotFound';
import './styles.css'; // Import your custom styles




const { Header, Content, Footer } = Layout; // Destructure Layout components

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header className='header'>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
            <Menu.Item key="2"><a href="/resume">Resume</a></Menu.Item>
            <Menu.Item key="3"><a href="/projects">Projects</a></Menu.Item>
            <Menu.Item key="4"><a href="/summary">Summary</a></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '10px 50px' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Content>
        <Footer id="footer"><h5>&copy; Thollarkings 2024</h5></Footer>
        </Layout>
      
    </Router>
  );
}

export default App;
