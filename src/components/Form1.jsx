import { useState } from "react"
import NoteItem from "./NoteItem"
import { v4 as uuidv4 } from 'uuid';
import AddButton from "./AddButton";
const Form1=() =>{
    //Another way
    const initFormData = {
        title:"",
        content:""
    }
    const[datas, setDatas] = useState(initFormData)
    const [note, setNote] = useState([])
    const [editingId, setEditingId] = useState(null)
    //One way
    /* const[inptTitle, setInptTitle]= useState("")
    // //handle title
    // const handleTitle = (e) => {
    //     setInptTitle(e.target.value)
    // }
    // const[content,setContent]= useState("")
    // const handleContent = (e) =>{
    //     setContent(e.target.value)
    //     console.log(e.target.value)
    // }*/
//Destructuring data
const{title,content} = datas
const handleChange = (e) =>{
    const{name, value}= e.target
    setDatas(prev => {
        return {...prev,[name]:value }
    })
}
const handleAdd = (e) =>{
    if(editingId){
        setNote(prev=>{
            return prev.map(item=>{
                return item.id==editingId ? {...item, title:datas.title, content:datas.content}: item
            })
        })
    }
    else{
        let newNoteObj ={
        id:uuidv4(),
        title:datas.title,
        content:datas.content
    }
    
    e.preventDefault()
    setNote((prev) => {
        return [...prev, newNoteObj]
    })
    }
    setEditingId(null)
    setDatas(initFormData)
}

console.log(datas)
//handle delete
const handleDelete = (id) =>{
    setNote(prev=>{
        return prev.filter(item => item.id !== id)
        })
    }
//handle edit
const handleEdit = (id) =>{
    setEditingId(id)
    let editingitem = note.find(item=>item.id==id)
    setDatas(editingitem)
}
    return(
        <>
        <form>
<div className="notesApp">
    <h1>Notes App</h1>
    <div className="notesForm">
        <div className="formField">
            <label htmlFor="title">Title</label>
            <input onChange={handleChange} name="title" required id="title" type="text" value={title}/>
        </div>
        <div className="formField">
            <label htmlFor="content">Content</label>
            <textarea  onChange={handleChange} name="content" required id="content" cols="30" rows="5" value={content}></textarea>
        </div>
        <AddButton handleAdd={handleAdd} editingId={editingId}/>
        {/* <button onClick={handleAdd}>{editingId? "Edit" : "Add"}  Note</button> */}
    </div>
    <div className="noteList">
         {note.map((item) =>{
            return <NoteItem key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
         })}
    </div>
</div>
</form>
</>
    )
}
export default Form1