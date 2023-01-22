// Hooks are a feature in React that allows developers to use state and other React features in functional components. They were introduced in React 16.8 as an alternative to class components. They allow developers to write more readable, reusable and testable code. 

// There are two main types of hooks: state hooks and effect hooks.

//  State hooks allow a functional component to have its own state, similar to the this.state property in class components.

//  Effect hooks allow functional components to synchronize with the DOM and handle side-effects, such as fetching data and updating the component when the component's props or state change.

// -0---------------

// useState

// In short, useState is a hook in React that allows you to add state to functional components, which is a way to store and manage data that can change over time. It returns an array with two elements: the current state value and a function to update the state value. It allows your component to react to user interactions and re-render when necessary

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
