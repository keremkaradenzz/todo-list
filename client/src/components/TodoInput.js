import React from 'react'

const TodoInput = ({ onChange, value }) => {
    return (
        <div data-testid="inputComponent" style={{width: '100%'}}><input type="text" onChange={onChange} value={value} className="w-100  px-2"/></div>
    )
}

export default TodoInput