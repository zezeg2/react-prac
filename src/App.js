import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect} from "react";

function App() {
    //--------------- useRef() 이해---------------
    // const [countState, set_countState] = useState(0);
    // const countRef = useRef(0)
    // let countVar = 0
    // const totalRenderingCnt = useRef(0)
    //
    // useEffect(() => {
    //     totalRenderingCnt.current = totalRenderingCnt.current + 1;
    //     console.log("렌더링 수 : ", totalRenderingCnt.current)
    // })
    //
    // function increaseCountState() {
    //     set_countState(countState + 1)
    // }
    //
    // function increaseCountRef() {
    //     countRef.current = countRef.current + 1
    //     console.log("Ref : ",countRef);
    // }
    //
    //
    // function increaseCountVar() {
    //     countVar = countVar + 1;
    //     console.log("Var : ",countVar);
    // }
    //
    // function pringResult() {
    //     console.log("state ; ", countState, "ref : ", countRef.current, "var : ", countVar )
    // }

    //--------------- useRef() 활용 ---------------

    const inputRef = useRef();

    useEffect(() => {
        // console.log(inputRef)
        inputRef.current.focus()
    },[])


    function login() {
        alert(`welcome ${inputRef.current.value}!`)
        inputRef.current.focus()
    }

    return (
        <div className="App">
            {/*--------------- useRef() 이해 --------------- */}
            {/*<p>State : {countState}</p>*/}
            {/*<p>Ref : {countRef.current}</p>*/}
            {/*<p>Var : {countVar}</p>*/}
            {/*<button onClick={increaseCountState}>State 증가</button>*/}
            {/*<button onClick={increaseCountRef}>Ref 증가</button>*/}
            {/*<button onClick={increaseCountVar}>Var 증가</button>*/}
            {/*<button onClick={pringResult}>state, ref, var 출력</button>*/}

            {/*--------------- useRef() 활용 ----용---------- */}

            <input ref={inputRef} type="text" placeholder="username"/>
            <button onClick={login}>login</button>

        </div>
    );
}

export default App;
