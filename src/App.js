import './App.css';
import {useEffect, useMemo, useState} from "react";

function hardCalculator(number) {
    console.log("어려운 계산")
    for (let i = 0; i < 999999999; i++) {}

    return number + 10000;
}

function easyCalculator(number) {
    console.log("쉬운 계산")
    return number + 100;
}

function App() {

    // import './App.css';
    // import {useEffect, useMemo, useState} from "react";
    //
    // function hardCalculator(number) {
    //     console.log("어려운 계산")
    //     for (let i = 0; i < 999999999; i++) {}
    //
    //     return number + 10000;
    // }
    //
    // function easyCalculator(number) {
    //     console.log("쉬운 계산")
    //     return number + 100;
    // }
    //
    // function App() {
    //
    //     const [number, setNumber] = useState(0);
    //     const [isKorea, setIsKorea] = useState(true);
    //
    //     // const location = isKorea ? '한국' : '외국';
    //
    //     const location = useMemo(() => {
    //         return {country: isKorea ? '한국' : '외국'}
    //     },[isKorea]);
    //
    //
    //     useEffect(() => {
    //         console.log('useEffect 호출됨')
    //     }, [location])
    //
    //
    //     const [hardNumber, setHardNumber] = useState(1);
    //     const [easyNumber, setEasyNumber] = useState(1);
    //
    //
    //     // const hardSum = hardCalculator(hardNumber);
    //     const hardSum = useMemo(() => {
    //         return hardCalculator(hardNumber);
    //     },[hardNumber])
    //
    //     const easySum = easyCalculator(easyNumber);
    //     return (
    //         <div className="App">
    //             <h3>어려운 계산기</h3>
    //             <input type="number" value={hardNumber} onChange={(e) => {
    //                 setHardNumber(parseInt(e.target.value))
    //             }}/>
    //             <span> + 10000 = {hardSum}</span>
    //
    //             <h3>쉬운 계산기</h3>
    //             <input type="number" value={easyNumber} onChange={(e) => {
    //                 setEasyNumber(parseInt(e.target.value))
    //             }}/>
    //             <span> + 10000 = {easySum}</span>
    //
    //             <h2>하루에 몇끼 드세요?</h2>
    //             <input type="number" value={number} onChange={(e) => {
    //                 setNumber(e.target.value)
    //             }}/>
    //             <hr/>
    //
    //             <h2>지금 어디에 계세요?</h2>
    //             <p>나라 : {location.country}</p>
    //             <button onClick={() => {
    //                 setIsKorea(!isKorea)
    //             }}>비행기 타자
    //             </button>
    //         </div>
    //     );
    // }
    //
    // export default App;


    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);


    // const hardSum = hardCalculator(hardNumber);
    const hardSum = useMemo(() => {
        return hardCalculator(hardNumber);
    },[hardNumber])

    const easySum = easyCalculator(easyNumber);
    return (
        <div className="App">
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onChange={(e) => {
                setHardNumber(parseInt(e.target.value))
            }}/>
            <span> + 10000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNumber} onChange={(e) => {
                setEasyNumber(parseInt(e.target.value))
            }}/>
            <span> + 100 = {easySum}</span>

            {/*<h2>하루에 몇끼 드세요?</h2>*/}
            {/*<input type="number" value={number} onChange={(e) => {*/}
            {/*    setNumber(e.target.value)*/}
            {/*}}/>*/}
            {/*<hr/>*/}

            {/*<h2>지금 어디에 계세요?</h2>*/}
            {/*<p>나라 : {location.country}</p>*/}
            {/*<button onClick={() => {*/}
            {/*    setIsKorea(!isKorea)*/}
            {/*}}>비행기 타자*/}
            {/*</button>*/}
        </div>
    );
}

export default App;
