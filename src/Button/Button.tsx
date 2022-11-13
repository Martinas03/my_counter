import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: ()=> void
    disabled: boolean
    className: string
}

export const Button = (props: ButtonPropsType) => {
    const OnclickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button className={props.className} disabled={props.disabled} onClick={OnclickHandler}>{props.title}</button>
        </div>
    );
};

