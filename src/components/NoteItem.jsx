import React from "react"
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
const NoteItem = ({item,handleDelete,handleEdit}) => {
    const {title,content} = item
    return(
    <>
    <div className="noteItem">
             <h2>{item.title}</h2>
             <p>{item.content}</p>
             <div className="noteMeta">
                <EditButton handleEdit={handleEdit} itemId={item.id} />
                 {/* <div onClick={()=>handleEdit(item.id)} className="edit">Edit</div> */}
                 {/* <div onClick={()=>handleDelete(item.id)} className="delete">Delete</div> */}
                 <DeleteButton handleDelete={handleDelete} itemId={item.id}/>
             </div>
         </div>   
    </>
    )
}
export default NoteItem