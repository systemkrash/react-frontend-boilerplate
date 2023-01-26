import React from 'react';
import { Link } from 'react-router-dom';

import Counter from '../components/Counter/Counter.js';

function About() {
  return (
    <div className="About">
      <Counter />
      Hello About <Link to="/">Go to Home</Link>
    </div>
  );
}

export { About as Page };
export default About;
