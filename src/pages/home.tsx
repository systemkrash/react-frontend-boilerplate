import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((counted) => counted + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/home.page.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <Link to="/about">About</Link>
      </p>
    </div>
  );
}

export { Home as Page };
export default Home;
