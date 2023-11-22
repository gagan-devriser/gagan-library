import React from 'react'

const Button = ({ type, title, className }: { type: string, title: string, className: string }) => {

    return (
        <button
            type={type}
            className={className ? className : "bg-orange-500 p-3 rounded-md font-bold hover:bg-orange-600"}
        >
            {title ? title : "Submitted"}
        </button>
    )
}

export default Button