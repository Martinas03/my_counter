import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";

type PropsType = {
    number: number
    inCreaseNumber: () => void
    resetNumber: () => void
    setValue: (value: number) => void
}

export const Counter = (props: PropsType) => {
    let [inputMaxValue, setInputMaxValue] = useState('0')
    let [inputMinValue, setInputMinValue] = useState('0')
    let [error, setError] = useState('')
    let [clickSet, setClickSet] = useState('')

    // useEffect(() => {
    //         let string = localStorage.getItem('CounterValue')
    //         if (string) {
    //             let newValue = JSON.parse(string)
    //             props.setValue(newValue)
    //         }
    //     }, []
    // )
    // useEffect(() => {
    //         setHandler()
    //     }, [props.number]
    // )
    const onClickIncreaseHandler = () => {
        props.inCreaseNumber()
    }

    const onClickResetHandler = () => {
        props.resetNumber()
    }

    // const setHandler = () => {
    //     localStorage.setItem('CounterValue', JSON.stringify(props.number))
    // }
    // const getHandler = () => {
    //     let string = localStorage.getItem('CounterValue')
    //     if (string) {
    //         let newValue = JSON.parse(string)
    //         props.setValue(newValue)
    //     }
    // }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // if(Number(e.currentTarget.value) >= 0){
        setInputMaxValue(e.currentTarget.value)
        // }
        setError('Incorrect value')
        setClickSet('press set')
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // if(Number(e.currentTarget.value) >= 0){
        setInputMinValue(e.currentTarget.value)
        // }
        setError('Incorrect value')
        setClickSet('press set')
    }


    let onSetHandler = () => {

    }
    let isCounterMax = props.number === Number(inputMaxValue)
    let isCounterMin = props.number === Number(inputMinValue)

    let incorrectValue = inputMaxValue <= inputMinValue
    let incorrecNegativeValue = ((Number(inputMaxValue) || Number(inputMinValue)) < 0) || ((Number(inputMaxValue) && Number(inputMinValue)) < 0)

    return (
        <div className={s.body}>
            <div className={s.counterWrapper}>
                <div className={s.wrapper}>
                    <div className={s.block1}>
                        <div className={s.item1}>
                            <div className={s.inputbox}>
                                <div>
                                    max value
                                </div>
                                <div>
                                    <input value={inputMaxValue} onChange={onChangeMaxHandler} type="number"
                                           className={incorrectValue || incorrecNegativeValue ? s.errorInput : s.input}/>
                                </div>
                            </div>

                            <div className={s.inputbox}>
                                <div>
                                    min value
                                </div>
                                <div>
                                    <input value={inputMinValue} type="number"
                                           onChange={onChangeMinHandler}
                                           className={incorrectValue || incorrecNegativeValue ? s.errorInput : s.input}/>
                                </div>
                            </div>

                        </div>
                        <div className={s.item2}>
                            <Button title={'set'} callBack={onSetHandler}
                                    disabled={incorrectValue || incorrecNegativeValue}
                                    className={s.setButton}/>
                            {/*<button onClick={onSetHandler} className={s.setButton}>*/}
                            {/*    set*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>


                <div className={s.counterWrapper}>

                    <div className={s.wrapper}>
                        <div className={s.block1}>
                            <div className={s.item1_2}>
                                <div
                                    className={isCounterMax || incorrectValue || incorrecNegativeValue ? s.number : s.currentNumber}>
                                    {incorrectValue || incorrecNegativeValue ? error : props.number}
                                </div>
                            </div>
                        </div>

                        <div className={s.item2}>
                            <div className={s.buttons}>
                                <Button title={'reset'}
                                        callBack={onClickResetHandler}
                                        disabled={isCounterMin || incorrectValue || incorrecNegativeValue}
                                        className={isCounterMin ? s.minimum : s.button}/>
                            </div>

                            <div className={s.buttons}>
                                <Button title={'inc'}
                                        callBack={onClickIncreaseHandler}
                                        disabled={isCounterMax || incorrectValue || incorrecNegativeValue}
                                        className={isCounterMax ? s.maximum : s.button}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

