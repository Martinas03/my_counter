import React from "react";

// type StateType = {
//     counter: number
// }

type ActionsType =  SetInputMinActionType

// type IncrementCounterActionType = {
//     type: 'INCREMENT-COUNTER'
// }
//
// type ResetCounterActionType = {
//     type: 'RESET-COUNTER'
// }

type SetInputMinActionType = {
    type: 'SET-INPUT-MIN'
    value: number
}



export const inputMinReducer = (state: number = 0, action: ActionsType) => {
    switch (action.type) {
        // case 'INCREMENT-COUNTER': {
        //     return state + 1
        // }
        // case 'RESET-COUNTER': {
        //     return state = 0
        // }
        case 'SET-INPUT-MIN': {
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

export const setInputMinAC = (value: number): SetInputMinActionType => ({type: "SET-INPUT-MIN", value})




