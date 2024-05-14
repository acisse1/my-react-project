import { useState } from "react";
import './Counter.css'

export default Counter;


function Counter () {

    const [counter, setCounter] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    const increment = function increment () {

        return setCounter(counter + incrementBy);
    }

    const decrement = function decrement () {

        return setCounter(counter - incrementBy);
    }

    const handleInput = function userInput (event) {

        setIncrementBy(Number(event.target.value));
        event.preventDefault();
    }

    const handleIncrementFactor = function factor () {

        return setIncrementBy(incrementBy);
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
        <div className="operations">
            <p>Increment/Decrement factor:</p>
            <input type="number" value={incrementBy} onChange={handleInput} />
            <button className="factor" type="submit" onClick={handleIncrementFactor}>Submit</button>
        </div>
        
    </div>
}