import React from 'react'

const Button = (props: any) => {
    return (
        <button
            {...props}
            className={props.className ? props.className : "bg-orange-500 p-3 rounded-md font-bold hover:bg-orange-600"}
        >
            {props.title ? props.title : "Submitted"}
        </button>
    )
}

export default Button