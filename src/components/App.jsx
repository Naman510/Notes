import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App(){
    const[notes,setNotes]=useState([]);
    function handleClick(note){
        setNotes((prevValue)=>{return [...prevValue,note];});
    }
    function deleteItem(id){
        setNotes((prevValue)=>{return(prevValue.filter((item,index)=>{return(id!=index)}))});
    }
    return (
        <div>
        <Header />
        <CreateArea onClick={handleClick}/>
        {notes.map((item,index)=>{return (<Note key={index} id={index} title={item.title} content={item.content} remove={deleteItem}/>);})}
        <Footer/>
        </div>
       
    );
}

export default App;