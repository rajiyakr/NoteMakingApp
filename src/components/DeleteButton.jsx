import React from "react"
const DeleteButton =({handleDelete, itemId}) =>{
    return (
        <div onClick={()=>handleDelete(itemId)} className="delete">Delete</div>
    )
    }

export default DeleteButton
