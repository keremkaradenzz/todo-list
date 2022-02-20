import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';
import TodoButton from './Button';
import TodoInput from './TodoInput'
import TodoItems from './TodoItems';

const TodoList = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState({ type: "", item: {} });


  const { todos } = useSelector(state => state.todos);

  useEffect(() => {
    setRefresh(false)
    dispatch(Actions.toDoActions.fetchTodo());
  }, [dispatch, refresh])

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  }


  const handleAdd = (event) => {
    const data = {
      content: value,
      isComplete: false
    };
    dispatch(Actions.toDoActions.addTodo(data));
    setRefresh(true);
    setValue("");
  }

  const handleDelete = (id) => {
    dispatch(Actions.toDoActions.deleteTodo(id));
    setRefresh(true);
  }

  const handleGetTodos = (id) => {
    const filterTodo = todos.filter(todo => todo._id === id);
    if (filterTodo.length > 0) {
      setValue(filterTodo[0].content);
      setEditMode({ type: "edit", item: filterTodo[0] });
    }
  }

  const handleUpdate = () => {
    const data = {
      content: value,
      isComplete: false
    };
    dispatch(Actions.toDoActions.editTodo(editMode.item.id, data));
    setValue("");
    setEditMode({ type: "", item: {} });
    setRefresh(true);
  }


  const handleCheck = (event, id) => {
    const filterTodo = todos.filter(todo => todo._id === id);
    const data = {
      content: filterTodo[0].content,
      isComplete: event.target.checked
    };
    dispatch(Actions.toDoActions.editTodo(id, data));
    setValue("");
    setEditMode({ type: "", item: {} });
    setRefresh(true);
  }
  return (
    <div data-testid="todoListComponent">
      <h3 data-testid="todoTitle">Todo List</h3>

      <TodoInput value={value} onChange={handleChange} />
      {editMode.type === "edit" ? <div className="d-flex">
        <TodoButton title="Update Todo" onClick={handleUpdate} />
        <TodoButton title="Cancel" onClick={() => setEditMode({ type: "", item: {} })} />
      </div> : <TodoButton title="Add Todo" onClick={handleAdd} />}

      <TodoItems todos={todos} onClick={handleGetTodos} onDelete={handleDelete} onCheck={handleCheck} />


    </div>
  )
}

export default TodoList