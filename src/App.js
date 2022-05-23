import './App.css';
import {useEffect, useState} from "react";
import Timer from "./component/Timer";

function App() {
    const [name, setName] = useState("");

    const [count, setCount] = useState(1);

    const [showTimer, setShowTimer] = useState(false);

    const [state, set_state] = useState(false);

    // useEffect(() => {
    //     console.log('All rendering First')
    // },[])


    useEffect(() => {
        console.log('count rendering🏀🏀')
    }, [count])

    useEffect(() => {
        console.log('name rendering🎾🥎')
    }, [name])

    const handleCountUpdate = () => {
        setCount(count + 1)
    };

    const handleNameUpdate = e => {
        setName(e.target.value)
    };

    return (
        <div className="App">
            <input type="button" onClick={handleCountUpdate} value="counter"/>
            <span>count : {count}</span><br/>

            <input type="text" value={name} onChange={handleNameUpdate}/>
            <span>{name}</span><br/>

            {showTimer && <Timer></Timer>}
            <button onClick={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
}

export default App;
