import { useState } from "react"

export default function Counter(){
    // declare a use state 
    let [count, setCount] = useState(5); // here count is a variable and setCount is a function 
    const myStyle = {
        border: '2px solid red',
        margin: '10px',
        cursor: 'pointer'
    }
    // function to increament count value 
    const handleIncrement = () =>{
        setCount(count+1);
        console.log(count);
    }
    // const handleAdd=()=>{
    //     const tmp = count+1;
    //     count = tmp;
    //     console.log(count);
    //     return count;
    // }
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <p style={myStyle}
            onClick={handleIncrement}
            // onClick={handleAdd}
            >Add</p>
            <p style={myStyle}
            onClick={()=>setCount(count-1)}
            >Minus</p>
        </div>
    )
}
