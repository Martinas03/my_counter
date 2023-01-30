import React from "react";

// type StateType = {
//     counter: number
// }

type ActionsType = IncrementCounterActionType | ResetCounterActionType | SetCounterActionType

type IncrementCounterActionType = {
    type: 'INCREMENT-COUNTER'
}

type ResetCounterActionType = {
    type: 'RESET-COUNTER'
}

type SetCounterActionType = {
    type: 'SET-COUNTER'
    value: number
}



export const counterReducer = (state: number = 0, action: ActionsType) => {
    switch (action.type) {
        case 'INCREMENT-COUNTER': {
            return state + 1
        }
        case 'RESET-COUNTER': {
            return state = 0
        }
        case 'SET-COUNTER': {
            return state = action.value
        }
        default:
            return state
    }
}

export const incrementCounterAC = (): IncrementCounterActionType => ({type: "INCREMENT-COUNTER"})

export const resetCounterAC = (): ResetCounterActionType => ({type: "RESET-COUNTER"})

export const setCounterAC = (value: number): SetCounterActionType => ({type: "SET-COUNTER", value})




