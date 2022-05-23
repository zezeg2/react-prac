### useCallback

useCallback()은 useMemo()와 동일하게 memoization기법을 사용하여 메모리에 캐싱하고 렌더링시 다시 캐싱된 값을 사용하는것에 공통점이 있다.

단, useMemo()와의 명백한 차이는 다음과 같다.

- useMemo() → 값(primitive)을 memoization하고 재호출시 memoization된 값을 반환
- useCallback() → 함수(Object)를 memoization하고 재호출 시 memoization된 함수를 반환

하는 것이다

### useCallback 예제

- useEffect()의 의존성 배열에 someFunc라는 함수를 추가하여 변경이 일어날 경우 콘솔에 로그를 출력하도록 한다.
    - useCallback을 사용하지 않을 경우
        - number를 변경한다(state) →  렌더링이 일어나고 컴포넌트 함수App이 재호출된다 → someFunc()를 가리키는 메모리 주소값이 변경된다 → useEffect가 실행된다
        - number 뿐만 아니라 toggle state가 업데이트되거나 다른상황에서 렌더링이 일어나면 useEffect()가 실행된다
    - useCallback을 사용했을 경우

      **의존성 배열이 빈 배열일 경우**

        - 최초 호출시 someFunc가 memoization된다 → number를 변경한다(state) →  렌더링이 일어나고 컴포넌트 함수App이 재호출된다 → someFunc가 memoization된 함수의 주소를 가리키기 때문에 변화가 일어나지 않음 → useEffect가 실행되지 않는다
        - 그러나 최초 렌더링시 memoization되었을 때의 number를 메모리에 그대로 캐싱하고 있기 때문에 버튼을 눌러 함수 호출 시 변화한 number를 표현하지 못한다.

      **의존성 배열에 number 추가**

        - 최초 호출시 someFunc가 memoization된다 → number를 변경한다(state) →  렌더링이 일어나고 컴포넌트 함수App이 재호출된다 → 의존성으로 가지고있는 number가 변했기 때문에 memoization이 일어난다. → useEffect()가 실행된다
        - number 가 변하는 상황을 제외한 다른 렌더링 상황에서는 memoization된 함수가 변하지 않으므로 useEffect()가 실행되지 않는다

```jsx
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
        </div>
    );
}

export default App;
```