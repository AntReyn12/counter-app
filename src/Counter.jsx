import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);

    return (
        <React.Fragment>
            <p>The current count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count * 2)}>Multiply by 2</button>
            <button onClick={() => setCount(count / 2)}>Divide by 2</button>
        </React.Fragment>
    );
};

export default Counter;