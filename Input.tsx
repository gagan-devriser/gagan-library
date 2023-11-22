import React from 'react'

const Input = (props: any) => {
    return (
        <input
            {...props}
            className={props.className ? props.className : "border-2 rounded text-lg p-1 px-2"}
        />
    )
}

export default Input