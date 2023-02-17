import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    const [bool,setBool]=useState(false);
    function handleChange(event){
        const {name,value}=event.target;
        setNote((prevValue)=>{
            if(name==="title"){
                return {title:value,content:prevValue.content};
            }
            else {
                return {title:prevValue.title,content:value};
            }
        })
    }
    function handleClick(){
        setBool(true);
    }
    return(
        <div>
          
            <form className="create-note">
                {bool && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
                <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={bool?"3":"1"} value={note.content}/>
                <Zoom in={bool}><Fab onClick={(event)=>{props.onClick(note);event.preventDefault(); setNote({title:"", content:""})}}><AddIcon/></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;