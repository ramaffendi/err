import { useState } from "react";

const FComponent = ({nama}) => {

    const [ value, setValue ] = useState (0);

    const Tambah = () => {
        setValue (value + 1) 

    }
    const Minus = () => {
        if(value > 0 ) {
            setValue (value - 1)
        }
         
    }
    return (
            <div>
                <h1>ini dibuat dengan functional componen </h1>
                <h2>hello {nama}</h2>
                <button onClick={Minus}>-</button>
                <span>{value}</span>
                <button onClick={Tambah}>+</button>
            </div> 
            ) 
}

export default FComponent;