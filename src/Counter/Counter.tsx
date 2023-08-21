import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {resetCounterAC, setCounterAC} from "../state/counterReducer";
import {AppRootStateType} from "../state/store";
import {setInputMaxAC} from "../state/inputMaxReducer";
import {setInputMinAC} from "../state/inputMinReducer";

type PropsType = {
    number: number
    inCreaseNumber: () => void
    resetNumber: () => void
}

export const Counter = (props: PropsType) => {
    let [error, setError] = useState('')
    let [pressSet, setPressSet] = useState('')
    let [disableSetButton, setDisableSetButton] = useState(true)
    let [disableResetAndIncButtons, setDisableResetAndIncButtons] = useState(true)
    const [pageLoaded, setPageLoaded] = useState(false);

    const inputMaxValue = useSelector<AppRootStateType, number>(state => state.inputMaxValue)
    const inputMinValue = useSelector<AppRootStateType, number>(state => state.inputMinValue)
    const dispatch = useDispatch()


    useEffect(() => {
        setPageLoaded(true);
        let valueAsString = localStorage.getItem('inputMaxValue')
        let valueAsStrin2g = localStorage.getItem('inputMinValue')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(setInputMaxAC(newValue))
        }
        if (valueAsStrin2g) {
            let newValue = JSON.parse(valueAsStrin2g)
            dispatch(setInputMinAC(newValue))

        }
    }, [])

    useEffect(() => {
        console.log('setMaxValue')
        if(pageLoaded) {
        localStorage.setItem('inputMaxValue', JSON.stringify(inputMaxValue))
        }
    }, [inputMaxValue])

    useEffect(() => {
        console.log('setMinValue')
        if(pageLoaded) {
            localStorage.setItem('inputMinValue', JSON.stringify(inputMinValue))
        }
    }, [inputMinValue])


    const onClickIncreaseHandler = () => {
        props.inCreaseNumber()
        setDisableSetButton(false)
    }

    const onClickResetHandler = () => {
        dispatch(setCounterAC(inputMinValue))
        setDisableSetButton(false)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputMaxAC(+e.currentTarget.value))
        setError('Incorrect value')
        setPressSet(`press "set"`)
        setDisableSetButton(true)
        setDisableResetAndIncButtons(false)
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputMinAC(+e.currentTarget.value))
        setError('Incorrect value')
        setPressSet(`press "set"`)
        setDisableSetButton(true)
        setDisableResetAndIncButtons(false)
    }

    let onSetHandler = () => {
        dispatch(setCounterAC(inputMinValue))
        setDisableSetButton(false)
        setDisableResetAndIncButtons(true)
    }


    let isCounterMax = props.number === inputMaxValue
    let isCounterMin = props.number === inputMinValue

    let incorrectValue = inputMaxValue <= inputMinValue

    let incorrectNegativeMaxValue = inputMaxValue < 0
    let incorrectNegativeMinValue = inputMinValue < 0

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
                                           className={incorrectValue || incorrectNegativeMaxValue ? s.errorInput : s.input}/>
                                </div>
                            </div>

                            <div className={s.inputbox}>
                                <div>
                                    min value
                                </div>
                                <div>
                                    <input value={inputMinValue} type="number"
                                           onChange={onChangeMinHandler}
                                           className={incorrectValue || incorrectNegativeMinValue ? s.errorInput : s.input}/>
                                </div>
                            </div>

                        </div>
                        <div className={s.item2}>
                            <Button title={'set'} callBack={onSetHandler}
                                    disabled={disableSetButton ? incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue : !disableSetButton}
                                    className={s.setButton}/>
                        </div>
                    </div>
                </div>



                <div className={s.counterWrapper}>

                    <div className={s.wrapper}>

                        <div className={s.block1}>
                            <div className={s.item1_2}>
                                <div
                                    className={isCounterMax || incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue ? s.number : s.currentNumber}>
                                    {incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue ? error : !disableResetAndIncButtons ? pressSet : props.number}
                                </div>
                            </div>
                        </div>

                        <div className={s.item2}>
                            <div className={s.buttons}>
                                <Button title={'reset'}
                                        callBack={onClickResetHandler}
                                        disabled={disableResetAndIncButtons ? isCounterMin || incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue : !disableResetAndIncButtons}
                                        className={isCounterMin ? s.minimum : s.button}/>
                            </div>

                            <div className={s.buttons}>
                                <Button title={'inc'}
                                        callBack={onClickIncreaseHandler}
                                        disabled={disableResetAndIncButtons ? isCounterMax || incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue : !disableResetAndIncButtons}
                                        className={isCounterMax ? s.maximum : s.button}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

