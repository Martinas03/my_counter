import React from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";

type PropsType = {
    number: number
    inCreaseNumber: () => void
    resetNumber: () => void
}

export const Counter = (props: PropsType) => {

    const onClickIncreaseHandler = () => {
        props.inCreaseNumber()
    }

    const onClickResetHandler = () => {
        props.resetNumber()
    }

    let isCounterMax = props.number === 10
    let isCounterMin = props.number === 0

    return (
        <div className={s.counterWrapper}>
            <div className={s.wrapper}>
                <div className={s.block}>
                    <div className={isCounterMax ? s.number : ''}>
                        {props.number}
                    </div>
                </div>

                <div className={s.buttons}>
                    <div>
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

                    <div>
                        <Button title={'inc'}
                                callBack={onClickIncreaseHandler}
                                disabled={isCounterMax}
                                className={isCounterMax ? s.maximum : s.button}/>

                        {/*<button className={isCounterMax ? s.maximum : ''}*/}
                        {/*        disabled={isCounterMax}*/}
                        {/*        onClick={onClickIncreaseHandler}>*/}
                        {/*    inc*/}
                        {/*</button>*/}</div>

                </div>

            </div>
        </div>);
};

