import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from './todoSlice';
import { useState } from 'react';

const TodoItem = ({todo}) =>{
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(todo.name);
    const [completed, setCompleted] = useState(todo.completed);
    const handleToggle = ()=>{
       dispatch(toggleTodo(todo))
    }
    const handleRemove = () => {
        dispatch(removeTodo(todo));
    }
    const handleCancel = () => {
        setName(todo.name);
        setIsEditing(false);
    }
    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleSave = () => {
        dispatch(updateTodo({ id: todo.id, name, completed}));
        setIsEditing(false);
    }
    const spanStyle = { textDecoration: todo.completed || completed? 'line-through' : '', cursor: 'pointer' };
   
    const checkboxStyle = todo.completed || completed ? 'bi-check-square' : 'bi-square' ;

    const spanEditStyle = { textDecoration: completed ? 'line-through' : '', cursor: 'pointer' };

    const checkboxEditStyle = completed ? 'bi-check-square' : 'bi-square';

 return (
        <li className="list-group-item d-flex align-items-center justify-content-between"
         key={todo.id}>
         <div className="d-flex align-items-center">
         {
             isEditing ? (
                <>
                     <span onClick={() => setCompleted(!completed)} style={spanEditStyle}>
                         <button className="btn btn-lg"><i className={`bi ${checkboxEditStyle}`} ></i></button>
                    
                     </span>  
                 <input value={name} onChange={e => setName(e.target.value)} />
                 </>
                )
                 :(
               
                  <span onClick={handleToggle} style = {spanStyle}>
                        <button className="btn btn-lg"><i className={`bi ${checkboxStyle}`} ></i></button>                        
                        {todo.name}         
                  </span>              
             )
            }
            </div>
            <div className="d-flex align-items-center">
                {
                isEditing?( 
                    <>
                        <button title="Save" className="btn btn-primary me-2" onClick={handleSave}>
                            <i className="bi bi-floppy-fill"></i>
                        </button>
                        <button title="Back to list" className="btn btn-secondary" onClick={handleCancel}>
                            <i className="bi bi-x-square-fill"></i>
                        </button>
                    </> 
                    ):( 
                    <>
                    <button className="btn btn-primary me-2" title="Edit todo" onClick={handleEdit}>
                                    <i className="bi bi-pencil-square"></i> 
                                </button>
                        <button onClick={handleRemove} className="btn btn-danger">
                            <i className="bi h4 bi-trash"></i>
                            </button>
                    </>)
                }
             </div>
         </li>
        
            

    )
}
export default TodoItem;