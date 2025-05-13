import React from "react";
const AddButton =({handleAdd,editingId})=>{
    return(
        <button onClick={handleAdd}>{editingId? "Edit" : "Add"}  Note</button>
    )
}
export default AddButton