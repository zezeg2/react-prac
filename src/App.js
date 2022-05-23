import logo from './logo.svg';
import './App.css';
import {useReducer, useState} from "react";

//reducer -> state 를 업데이트 하는 역할
//dispatch -> state 업데이트를 위한 요구
//action -> 요구의 내용

const ACTION_TYPE = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}

const reducer = (state, action) => {
    console.log('reducer working...', state,action)
    switch (action.type){
        default:
            return state
        case ACTION_TYPE.deposit:
            return state + action.payload;
        case ACTION_TYPE.withdraw:
            if (state - action.payload < 0){
                console.log("잔액 부족")
                return state
            }
            return state - action.payload;


    }

};

function App() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer,0);



    return (
        <div className="App">
            <h2>useReducer 은행</h2>
            <p>잔고 : {money}</p>
            <input type="number" value={number} onChange={(e) => {
                setNumber(parseInt(e.target.value))
            }} step="1000"/>
            <button onClick={() => {
                dispatch({type:ACTION_TYPE.deposit, payload: number});
            }}>예금</button>
            <button onClick={() => {
                dispatch({type:ACTION_TYPE.deposit, payload: number});
            }}>출금</button>

        </div>
);
}

export default App;
