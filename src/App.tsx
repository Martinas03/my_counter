import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {counterReducer, incrementCounterAC, resetCounterAC, setCounterAC} from "./state/counterReducer";

function App() {

    const [pageLoaded, setPageLoaded] = useState(false);

    const counter = useSelector<AppRootStateType, number>(state => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        setPageLoaded(true)
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(setCounterAC(newValue))
        }
    }, [])

    useEffect(() => {
        if(pageLoaded) {
        localStorage.setItem('counterValue', JSON.stringify(counter))
        }
    }, [counter])



    const inCreaseNumber = () => {
        const action = incrementCounterAC()
        dispatch(action)
    }

    const resetNumber = () => {
        const action = resetCounterAC()
        dispatch(action)
    }

    return (
        <div className="App">
            <Counter number={counter}
                     inCreaseNumber={inCreaseNumber}
                     resetNumber={resetNumber}
            />
        </div>
    );
}

export default App;


{/*<CounterSettings setValue={setValue}/>*/
}
