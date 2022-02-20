import React from 'react'
import {Button} from 'react-bootstrap'
const TodoButton = ({ onClick, title }) => {
    return (
        <div className="my-2 mx-2" data-testid="buttonComponent"> 
        <Button onClick={onClick}>{title}</Button>
        </div>
    )
}

export default TodoButton