import React, {useState} from "react"

export default function() {
    const [counter, setCounter] = useState(10)

function updateCounter(operator) {
    if (operator === "plus") {
        setCounter(c => c + 1)
    } else if (operator === "minus") {
        setCounter(c => c - 1)
    }
}

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => updateCounter("plus")}>+</button>
            <button onClick={() => updateCounter("minus")}>-</button>
        </div>
    )
}