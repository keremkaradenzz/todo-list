import React from 'react'
import { ListGroup, } from 'react-bootstrap'
const TodoItems = ({ todos, onClick, onDelete, onCheck }) => {

  return (
    <ListGroup style={{ minWidth: 500 }} className="mt-5" data-testid="todoItemComponent">
      {todos?.length > 0 && todos.map((item, index) =>
        <ListGroup.Item key={index} as="li"
          className="d-flex justify-content-between align-items-start" variant={item.isComplete ? "success" : "danger"}>

          <div className="text-black">{item.content}</div>
          <div className="d-flex ">
            <div style={{cursor: "pointer"}} onClick={() => onClick(item._id)} className="mx-5 text-black" >Update</div>
            <div style={{cursor: "pointer"}}  onClick={() => onDelete(item._id)} className="text-black">Delete</div>
            <div className="mt-1 ms-5"><input type="checkbox" name="isComplete" checked={item.isComplete} onChange={(e) => onCheck(e,item._id)}/></div>
            
          </div>

        </ListGroup.Item>
      )}
    </ListGroup >
  )
}

export default TodoItems