import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './index.css';

import { Page as Home } from './home.js';
import { Page as About } from './about.js';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export { Index as Page };
