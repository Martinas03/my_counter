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
    let [inputMaxValue, setInputMaxValue] = useState<number>(0)
    let [inputMinValue, setInputMinValue] = useState<number>(0)
    let [error, setError] = useState('')
    let [pressSet, setPressSet] = useState('')
    let [disableSetButton, setDisableSetButton] = useState(true)
    let [disableResetAndIncButtons, setDisableResetAndIncButtons] = useState(true)

    useEffect(() => {
        let valueAsString =  localStorage.getItem('counterValue')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setInputMaxValue(newValue)
            setInputMinValue(newValue)
        }
    }, [])

    //
    // useEffect(() => {
    //     let valueAsString =  localStorage.getItem('counterValue')
    //     if(valueAsString){
    //         let newValue = JSON.parse(valueAsString)
    //         setInputMinValue(newValue)
    //     }
    // }, [])
    //
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(inputMaxValue))
    }, [inputMaxValue])

        useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(inputMinValue))
    }, [inputMinValue])


    const onClickIncreaseHandler = () => {
        props.inCreaseNumber()
        setDisableSetButton(false)
    }

    const onClickResetHandler = () => {
        props.setValue(inputMinValue)
        setDisableSetButton(false)

    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(+e.currentTarget.value)
        setError('Incorrect value')
        setPressSet(`press "set"`)
        setDisableSetButton(true)
        setDisableResetAndIncButtons(false)
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(+e.currentTarget.value)
        setError('Incorrect value')
        setPressSet(`press "set"`)
        setDisableSetButton(true)
        setDisableResetAndIncButtons(false)
    }


    let onSetHandler = () => {
        props.setValue(inputMinValue)
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
                                    disabled={disableSetButton ? incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue: !disableSetButton}
                                    className={s.setButton}/>
                        </div>
                    </div>
                </div>



                <div className={s.counterWrapper}>

                    <div className={s.wrapper}>

                        <div className={s.block1}>
                            <div className={s.item1_2}>
                                <div
                                    className={isCounterMax || incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue ? s.number :  s.currentNumber}>
                                    {incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue ? error : !disableResetAndIncButtons ? pressSet : props.number}
                                </div>
                            </div>
                        </div>

                        <div className={s.item2}>
                            <div className={s.buttons}>
                                <Button title={'reset'}
                                        callBack={onClickResetHandler}
                                        disabled={disableResetAndIncButtons ? isCounterMin || incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue: !disableResetAndIncButtons}
                                        className={isCounterMin ? s.minimum : s.button}/>
                            </div>

                            <div className={s.buttons}>
                                <Button title={'inc'}
                                        callBack={onClickIncreaseHandler}
                                        disabled={disableResetAndIncButtons ? isCounterMax || incorrectValue || incorrectNegativeMinValue || incorrectNegativeMaxValue: !disableResetAndIncButtons}
                                        className={isCounterMax ? s.maximum : s.button}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

