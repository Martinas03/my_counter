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
    let [inputNumber, setInputNumber] = useState('')
    useEffect(() => {
            let string = localStorage.getItem('CounterValue')
            if (string) {
                let newValue = JSON.parse(string)
                props.setValue(newValue)
            }
        }, []
    )
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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputNumber(e.currentTarget.value)
    }

    let onSetHandler = () => {

    }
    let isCounterMax = props.number === 10
    let isCounterMin = props.number === 0

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
                                    <input value={inputNumber} onChange={onChangeHandler} type="number"
                                           className={s.input}/>
                                </div>
                            </div>

                            <div className={s.inputbox}>
                                <div>
                                    min value
                                </div>
                                <div>
                                    <input type="number" className={s.input}/>
                                </div>
                            </div>

                        </div>
                        <div className={s.item2}>
                            <button onClick={onSetHandler} className={s.setButton}>
                                set
                            </button>
                        </div>
                    </div>
                </div>


                <div className={s.counterWrapper}>

                    <div className={s.wrapper}>
                        <div className={s.block1}>
                            <div className={s.item1_2}>
                                <div className={isCounterMax ? s.number : s.currentNumber}>
                                    {props.number}
                                </div>
                            </div>
                        </div>

                        <div className={s.item2}>
                            <div className={s.buttons}>
                                <Button title={'reset'}
                                        callBack={onClickResetHandler}
                                        disabled={isCounterMin}
                                        className={isCounterMin ? s.minimum : s.button}/>
                                {/*<button*/}
                                {/*    className={isCounterMin ? s.minimum : ''}*/}
                                {/*    disabled={isCounterMin}*/}
                                {/*    onClick={onClickResetHandler}>*/}
                                {/*    reset*/}
                                {/*</button>*/}
                            </div>

                            <div className={s.buttons}>
                                <Button title={'inc'}
                                        callBack={onClickIncreaseHandler}
                                        disabled={isCounterMax}
                                        className={isCounterMax ? s.maximum : s.button}/>

                                {/*<button className={isCounterMax ? s.maximum : ''}*/}
                                {/*        disabled={isCounterMax}*/}
                                {/*        onClick={onClickIncreaseHandler}>*/}
                                {/*    inc*/}
                                {/*</button>*/}
                            </div>
                            {/*<div>*/}
                            {/*    <Button title={'SetToLocalStorage'}*/}
                            {/*            callBack={setHandler}*/}
                            {/*            disabled={false}*/}
                            {/*            className={s.button}/>*/}

                            {/*    /!*<button className={isCounterMax ? s.maximum : ''}*!/*/}
                            {/*    /!*        disabled={isCounterMax}*!/*/}
                            {/*    /!*        onClick={onClickIncreaseHandler}>*!/*/}
                            {/*    /!*    inc*!/*/}
                            {/*    /!*</button>*!/*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <Button title={'GetToLocalStorage'}*/}
                            {/*            callBack={getHandler}*/}
                            {/*            disabled={false}*/}
                            {/*            className={s.button}/>*/}

                            {/*    /!*<button className={isCounterMax ? s.maximum : ''}*!/*/}
                            {/*    /!*        disabled={isCounterMax}*!/*/}
                            {/*    /!*        onClick={onClickIncreaseHandler}>*!/*/}
                            {/*    /!*    inc*!/*/}
                            {/*    /!*</button>*!/*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

