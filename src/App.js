import {useEffect, useState} from "react";
import uuid from "react-uuid";
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import SplashScreen from "./SplashScreen";


function App() 
{
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => 
  {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  const [activeNote, setActiveNote] = useState(false);


  useEffect(() => 
  {

    localStorage.setItem("notes", JSON.stringify(notes));

  }, [notes]);


  const onAddNote = () => 
  {
    const newNote = 
    {
      id: uuid(),

      title: "Untitled Note",

      body:"",

      lastModified: Date.now(),

    }

    setNotes([newNote, ...notes]);
    
  };

  const onDeleteNote = (idToDelete) =>
  {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  };

  const getActiveNote = () => 
  {

    return notes.find((note) => note.id === activeNote);

  }

  const onUpdateNote = (updatedNote) => 
  {
    const updatedNotesArray = notes.map((note) => 
    {
      if(note.id === activeNote)
      {
        return updatedNote;
      }

      return note;
    })
    setNotes(updatedNotesArray);
  };

  return isLoading ? 
  <SplashScreen></SplashScreen> : 
  (
    <div className="App">
      
    <Sidebar

     notes={notes} 
     
     onAddNote={onAddNote} 
     
     onDeleteNote={onDeleteNote}
     
     activeNote={activeNote}

     setActiveNote={setActiveNote}
     
     />

    <Main 

      activeNote={getActiveNote()} 
      
      onUpdateNote={onUpdateNote} 
      
    />  
      
    </div>

  
  );
}

export default App;
