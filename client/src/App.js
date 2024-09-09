import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AIExpert from './pages/aiexpert/AIExpert';
import "./App.css"

const App = () => (
    <Router>
        <div className="app-container">
            <Header />
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/ai-expert" element={<AIExpert />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    </Router>
);

export default App;
