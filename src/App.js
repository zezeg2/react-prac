import './App.css';
import {useCallback, useEffect, useState} from "react";
import Box from "./Box";

function App() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);


    const someFunc = useCallback(() => {
        console.log('someFunc : number', number)
        return;
    }, [number]);

    // const someFunc = () => {
    //   console.log('someFunc : number', number)
    //   return;
    // }

    useEffect(() => {
        console.log("someFunc가 변경되었습니다. ")
    }, [someFunc])

    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);


    // const createBoxStyle = () => {
    //     return{
    //         backgroundColor:'pink',
    //         width:`${size}px`,
    //         height:`${size}px`
    //     };
    // };

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);


    return (
        <div className="App" style={{
            backgroundColor: isDark ? 'black' : 'white'
        }}>
            <input type="number" value={number} onChange={(e) => {
                setNumber(e.target.value)
            }}/>
            <button onClick={() => {
                setToggle(!toggle)
            }}>{toggle.toString()}</button>
            <br/>
            <button onClick={someFunc}>call SomeFunc</button>

            <input type="number" value={size} onChange={(event) => {
                setSize(Number(event.target.value))
            }}/>
            <button onClick={() => {
                setIsDark(!isDark)
            }}>{isDark.toString()}</button>
            <Box createBoxStyle={createBoxStyle}></Box>

        </div>
    );
}

export default App;
