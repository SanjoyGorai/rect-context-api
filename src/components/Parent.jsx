import React from 'react'

const Parent = (props) => {
    return (
        <div className='bg-blue-400'>
            <h1 className='text-red-600'>Parent Componant Top</h1>
            {props.children}
            <h1>Parent Bottom</h1>
        </div>
    )
}

export default Parent