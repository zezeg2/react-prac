# 2022. 5. 18. 오후 4:25
### useEffect

```jsx
useEffect(()=>{
		// 수행할 작업
    return ()=>{
        // Clean Up
    }
},[deps])

```

- useEffect를 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있다.
- 첫 번째 인자로는 콜백함수, 두번째 인자로는 배열형태의 deps를 받는다
- 콜백함수는 렌더링이 일어날 때 일어나며 특정 작업을 정의한다.(실행하고자 하는 함수)

    ```jsx
    useEffect(() => {
        console.log("맨 처음 렌더링될 때(마운트) 한 번만 실행");
      },[]);
    ```

    ```jsx
    useEffect(() => {
        console.log(name);
        console.log("name이라는 값이 업데이트 될 때만 실행");
      },[name]);
    ```

    ```jsx
    useEffect(() => {
        console.log("렌더링 될때마다 실행");
      });
    ```

- 두번째 인자에 입력한 **deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행**
- 클린업 함수는 useEffect의 return 값으로 정의, 컴포넌트가 삭제될 경우(언마운트) 함수가 실행된다.

### **React Hook Lifecycle 관점에서의 useEffect**

![img.png](img.png)

### 1. componentDidMount, componentDidUpdate 수행

useEffect는 컴포넌트 안에서 불러내어 state변수나 props에 접근이 가능하고, 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행됩니다. 두번째 인자로 조건을 걸어 첫번째 렌더링이나 특정한 조건일때만 수행되도록 하는 것도 가능합니다.

```jsx
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    document.title = `You clicked ${count} times`;
  });
```

### 2. 정리(clean-up)의 실행

모든 effect는 정리를 위한 함수를 반환할 수 있다. 이 방법으로 구독의 추가와 제거를 하나의 effect로 구성할 수 있음. 마운트 해제 시점에 컴포넌트가 정리된다.

```jsx
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```

### 3. Effect를 건너뛰어 성능 최적화

모든 렌더링 이후에 effect를 정리하거나 적용하는 것이 때때로 성능 저하를 발생시킨다. 특정 값들이 리렌더링 시에 변경되지 않는다면 effect를 건너뛰도록 할 수 있다. useEffect는 선택적으로 두번째 인수를 배열로 넘기면 가능.

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // count가 바뀔 때만 effect를 재실행합니다.
```