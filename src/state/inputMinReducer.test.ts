import {inputMaxReducer, setInputMaxAC} from "./inputMaxReducer";
import {inputMinReducer, setInputMinAC} from "./inputMinReducer";

let count: number

beforeEach(() => {
    count = 0
})

// test('counter should be increment', () =>{
//
//     const action = inputMaxReducer(1)
//     const endState = (count, action)
//
//     expect(endState).toBe(1)
// })
//
// test('counter should be resetable', () =>{
//
//     count = 1
//
//     const action = resetCounterAC()
//     const endState = counterReducer(count, action)
//
//     expect(endState).toBe(0)
// })

test('counter should be setable', () =>{

    const action = setInputMinAC(1)
    const endState = inputMinReducer(count, action)

    expect(endState).toBe(1)
})







