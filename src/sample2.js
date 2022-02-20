import React, { useState, useEffect } from 'react';

export function Sample2() {
  const [count, setCount] = useState(0);

  const cnt2action = () =>{
    setCount(count + 2);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => cnt2action()}>
        Click me cont2
      </button>
      <button onClick={() => setCount(count + 3)}>
        Click me cont3
      </button>
    </div>
  );
}
