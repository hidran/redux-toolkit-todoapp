import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteListMutation,useUpdateListMutation } from './listsApi';
import { Loading } from '../../app/components/Loading';
import { Error } from '../../app/components/Error';
function ListItem({ list }) {

   const [updateList,{isError:isUpdateError, isLoading:isUpdateLoading, isSuccess:isUpdateSuccess}] =useUpdateListMutation();
    const [deleteList, { isError: isDeleteError, isLoading: isDeleteLoading, isSuccess: isDeleteSuccess }] = useDeleteListMutation();

   const [isEditing,setIsEditing] = useState(false);
   const [name, setName] = useState(list.name);
   const [error, setError] = useState('');
    const handleRemove = async () => {
        try {
            await deleteList(list.id)
        } catch (error) {
            setError(error.message);
        }
       
    };
    const handleEdit = () => {
        setIsEditing(true);
    };
    const navigate = useNavigate();
    const handleNavigate = () =>{
        if(isEditing){
            return;
        }
        navigate(`/lists/${list.id}?listName=${encodeURIComponent(list.name)}`)
    };
    const handleCancel = () =>{
        setName(list.name);
        setIsEditing(false);
    }
    const handleSave = async () => {
          try {
              await updateList({ id: list.id, name })
        } catch (error) {
            setError(error.message);
        }
        setIsEditing(false);
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {isUpdateLoading || isDeleteLoading?<Loading></Loading>: null }
            {error || isUpdateError || isDeleteError ? <Error>{error+isUpdateError+isDeleteError}</Error> : null}
            <div onClick={handleNavigate} style={{cursor:'pointer'}}>
                
                {isEditing ? (
                    <input value={name} onChange={ e=> setName(e.target.value)}/>
                ):(
                    <>
                    <strong>{list.name}</strong> <br />
                    <small>Created at: {new Date(list.created_at).toLocaleString()}</small>
                   </>
                )}
            </div>
            <div className= "d-flex ms-3 align-items-center">
                { !isEditing?
                (<>
                    <button className="btn btn-primary me-3" title="Edit list" onClick={handleEdit}>
                        <i className="bi bi-pencil-square"></i> 
                    </button>
                    <button className="btn btn-success  me-3" title ="View todos" onClick={handleNavigate}>
                        <i className="bi bi-info-square"></i> 
                    </button>
                <button className="btn btn-danger" title="remove lists" onClick={handleRemove}>
                    <i className="bi bi-trash"></i> 
                </button>
               </>) :
                    (

                        <>
                            <button title ="Save" className="btn btn-primary me-2" onClick={handleSave}>
                                <i className="bi bi-floppy-fill"></i> 
                            </button>
                            <button title="Back to list" className="btn btn-secondary" onClick={handleCancel}>
                               <i className="bi bi-x-square-fill"></i> 
                            </button>
                        </>          
                    )
}
            </div>
        </li>
    );
}

export default ListItem;
