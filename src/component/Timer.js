import React, {useEffect} from 'react';

function Timer(props) {
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("timer...")
        }, 1000)

        return ()=>{
            clearInterval(timer);
            console.log("exit timer...")
        }
    },[])
    return (
        <div>
            <span>starring timer... watch your console</span>
        </div>
    );

}

export default Timer;