import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector.js';
import { useAppDispatch } from '../../hooks/useAppDispatch.js';

import { decrement, increment, selectCount } from './counterSlice.js';

import styles from './Counter.module.css';

function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
