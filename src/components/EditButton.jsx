import React from "react"
const EditButton =({handleEdit,itemId}) =>{
    return(
        <div onClick={()=>handleEdit(itemId)} className="edit">Edit</div>
    )
}
export default EditButton