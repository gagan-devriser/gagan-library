import React from 'react'
import Button from './Button';
import Input from './Input';

const DevriserLib = (props: any) => {
    const { type, title, className } = props
    return (
        props.type === "Input" ? (<>
            <Input
                {...props}
            />
        </>) : (<>
            <Button
                type={type}
                title={title}
                className={className}
            />
        </>)
    )
}

export default DevriserLib