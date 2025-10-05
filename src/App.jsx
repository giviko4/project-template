// src/App.jsx
import React, { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

// კომპონენტების იმპორტი
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

// მთავარი სტილების იმპორტი
import './App.css';

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div className="app-layout">
      <Header />
      <div className="header-spacer"></div>

      <main>
        {/* ვაბრუნებთ ანიმაციების სრულ ლოგიკას */}
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div ref={nodeRef} className="page-container">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;