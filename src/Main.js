function Main({activeNote, onUpdateNote})
{
    const onEditField = (key, value) => 
    {
        onUpdateNote(
            {
                ...activeNote,

                [key]: value,

                lastModiefied: Date.now()
            })
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return <div className="app-main">

                <div className="app-main-note-edit">

                    <input
                     
                        type="text" 
                        
                        id="title" 
                        
                        value={activeNote.title} 
                        
                        onChange={(e) => onEditField("title", e.target.value)} 
                        
                        autoFocus 
                     
                     />
 
                    <textarea 
                    
                        id="body" 
                        
                        placeholder="write your note" 
                        
                        value={activeNote.body}

                        onChange={(e) => onEditField("body", e.target.value)} 
                    />

                </div>


        </div>
}

export default Main;