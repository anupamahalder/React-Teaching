
export default function Print(){
    // function 
    const handleAlert = () =>{
        return alert("Hello world!");
    }
    // passing parameter
    const handleAlert2 = (name)=>{
        return alert(`Hello how are you ${name}?`);
    }
    const myStyle = {cursor: 'pointer', color:'purple', backgroundColor: 'pink'};
    const name = "Shrijon";

    const handleAdd5ToSomething = (num) =>{
        return alert(num+5);
    }

    return (
        <div>
            <h1>Print Here</h1>
            {/* <p onclick="handleAlert">Click here</p> */}
            <p style={myStyle}
            onClick={handleAlert}>Click here</p>
            <p style={myStyle} 
            // we will use arrow function to pass any paramater 
            onClick={()=> handleAlert2(name)}>Print Hello</p>
            <p style={{color:'yellow', cursor:'pointer'}}
            onClick={()=>handleAdd5ToSomething(7)}
            >Add Two</p>
        </div>
    )
}