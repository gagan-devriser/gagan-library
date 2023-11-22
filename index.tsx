import React from 'react'
import Button from './Button';
import Input from './Input';

const DevriserLib = (props: any) => {
    return (
        props.type === "Input" ? (<>
            <Input />
        </>) : (<>
            <Button />
        </>)
    )
}

export default DevriserLib