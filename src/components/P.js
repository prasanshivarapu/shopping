import React, { useState, useEffect } from "react";

function FunctionalLifecycleExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("ComponentDidMount (initial render)");
        return () => {
            console.log("componentWillUnmount");
        };
    }, []); // Empty dependency array means this effect runs only once after the initial render

    useEffect(() => {
        console.log("Render called");
    }); // This effect runs after every render

    useEffect(() => {
        console.log("Count changed:", count);
        return () => {
            console.log("Count cleanup:", count);
        };
    }, [count]); // This effect runs when count changes, and also has a cleanup function

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    console.log("Render");

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>
        </div>
    );
}

export default FunctionalLifecycleExample;
