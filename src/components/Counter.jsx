import React, { memo } from 'react'
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    console.log("RENDER COUNTER");
    
    return (
        <div className="counterWrapper">
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Add more</button>
        </div>
    )
}

export default memo(Counter);
