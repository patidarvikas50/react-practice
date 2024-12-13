import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        // alert("mm")
        setCount(count +1)
    }

    const decrement = () => {
        // alert("vvv")
       if(count > 0){ setCount(count -1)} //if count is greater than 0 than decrement work unless not.
    }
    return (
        <div className='counter-main'>
            <button className='decrement-btn btn' disabled={count === 0} onClick={decrement}>-</button>
            <div className='count-container flex justify-center items-center'>{count}</div>
            <button className='increment-btn btn' onClick={increment}>+</button>
        </div>
    )
}

export default Counter
