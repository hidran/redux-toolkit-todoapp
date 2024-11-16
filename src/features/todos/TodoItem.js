import { useState } from 'react';
import {  useUpdateTodoMutation, useDeleteTodoMutation } from './todosApi';
import { Error } from '../../app/components/Error';

const TodoItem = ({todo}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(todo.name);
    const [completed, setCompleted] = useState(todo.completed);

    const [updateTodo, { isLoading: isUpdating, isError: updateError }] = useUpdateTodoMutation();
    const [deleteTodo, { isLoading: isDeleting, isError: deleteError }] = useDeleteTodoMutation();
    const [errorMsg, setErrorMsg] = useState('');
    const handleToggle = async ()=>{
        const newCompleted = !completed;
        setCompleted(newCompleted);
        try {
            await updateTodo({ id: todo.id, listId: todo.list_id, completed: newCompleted, name }).unwrap();
           
        } catch (error) {
            setErrorMsg(error.data?.message || "Failed to update todo");
        }
    }
    const handleRemove = async () => {
        try {
            await deleteTodo(todo.id).unwrap();
        } catch (error) {
            setErrorMsg(error.data?.message || "Failed to delete todo");
        }
    }
    const handleCancel = () => {
        setName(todo.name);
        setIsEditing(false);
    }
    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleSave = async () => {
        try {
            await updateTodo({ id:todo.id,listId:todo.list_id,completed, name }).unwrap();
            setIsEditing(false);
        } catch (error) {
            setErrorMsg(error.data?.message || "Failed to update todo");
        }
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
                         <button disabled={isUpdating || isDeleting} title="Save" className="btn btn-primary me-2" onClick={handleSave}>
                            <i className="bi bi-floppy-fill"></i>
                        </button>
                        <button title="Back to list" className="btn btn-secondary" onClick={handleCancel}>
                            <i className="bi bi-x-square-fill"></i>
                        </button>
                    </> 
                    ):( 
                    <>
                             <button disabled={isUpdating || isDeleting} className="btn btn-primary me-2" title="Edit todo" onClick={handleEdit}>
                                    <i className="bi bi-pencil-square"></i> 
                                </button>
                             <button disabled={isUpdating || isDeleting} onClick={handleRemove} className="btn btn-danger">
                            <i className="bi h4 bi-trash"></i>
                            </button>
                    </>)
                }
             </div>
         {(updateError || deleteError) && <Error>{errorMsg}</Error>}
         </li>
        
            

    )
}
export default TodoItem;