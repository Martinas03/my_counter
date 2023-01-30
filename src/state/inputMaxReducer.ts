import React from "react";

// type StateType = {
//     counter: number
// }

type ActionsType =  SetInputMaxActionType

// type IncrementCounterActionType = {
//     type: 'INCREMENT-COUNTER'
// }
//
// type ResetCounterActionType = {
//     type: 'RESET-COUNTER'
// }

type SetInputMaxActionType = {
    type: 'SET-INPUT-MAX'
    value: number
}



export const inputMaxReducer = (state: number = 0, action: ActionsType) => {
    switch (action.type) {
        // case 'INCREMENT-COUNTER': {
        //     return state + 1
        // }
        // case 'RESET-COUNTER': {
        //     return state = 0
        // }
        case 'SET-INPUT-MAX': {
            return state = action.value
        }
        default:
            return state
    }
}
//
// export const incrementCounterAC = (): IncrementCounterActionType => ({type: "INCREMENT-COUNTER"})
//
// export const resetCounterAC = (): ResetCounterActionType => ({type: "RESET-COUNTER"})

export const setInputMaxAC = (value: number): SetInputMaxActionType => ({type: "SET-INPUT-MAX", value})




