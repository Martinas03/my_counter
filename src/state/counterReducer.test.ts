import React from "react";
import {counterReducer, incrementCounterAC, resetCounterAC, setCounterAC} from "./counterReducer";

let count: number

beforeEach(() => {
    count = 0
})

test('counter should be increment', () =>{

    const action = incrementCounterAC()
    const endState = counterReducer(count, action)

    expect(endState).toBe(1)
})

test('counter should be resetable', () =>{

    count = 1

    const action = resetCounterAC()
    const endState = counterReducer(count, action)

    expect(endState).toBe(0)
})

test('counter should be setable', () =>{

    const action = setCounterAC(1)
    const endState = counterReducer(count, action)

    expect(endState).toBe(1)
})






