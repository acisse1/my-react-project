import { useState } from "react";
import './Counter.css'

export default Counter;


function Counter () {

    const [counter, setCounter] = useState(0);

    const increment = function increment () {

        return setCounter(counter + 1);
    }

    const decrement = function decrement () {

        return setCounter(counter - 1);
    }

    const clear = function clear () {

        return setCounter(0);
    }


    return <div>
        <div className="counter">{counter}</div>

        <div className="operations">
            <button className="increment" onClick={increment}>Increment</button>
            <button className="clear" onClick={clear}>Clear</button>
            <button className="decrement" onClick={decrement}>Decrement</button>
        </div>
        
    </div>
}