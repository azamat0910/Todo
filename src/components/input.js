import './input.css'
import {useState} from 'react';


export default function Form () {
  const [name, setName] = useState("");
  const [toDos, setToDos] = useState([]);
  const [NewName, setNewName] = useState("");
  const [editedTodos, setEditedToDos] = useState([]);
  const [edit, setEdit] = useState(false);
  

  const addToDo = ()=> {
    if (name !== ""){ 
      setToDos ([...toDos, name])
      setName("");
    }
    
  }

  function deleteToDo (text) {
    const newToDos = toDos.filter((todo) => {
      return todo !== text;
    });
    setToDos(newToDos)
    
  }

  function clearAll () {
    setToDos('')
    setEditedToDos('')
  }

  function editName () {
    setEdit(!edit)
  }

  const editToDo = ()=> {
   
      setEditedToDos ([...editedTodos, NewName])
      setToDos([...editedTodos, NewName])
  
    
    
  }



    return ( 
            <>
            <div className = 'blockInput'>
          
            <div className='blockForm'> 
            
            
            <input 
            type='text'
            name='name'
            className = "textTask" 
            value={name} 
            onChange={ (e)=> {  setName(e.target.value)}}/> 
            
            <button className = "submitTask"  onClick={addToDo} > Add task </button>
        
            
            
            </div>
            
            <hr/>
            
            {toDos?.length > 0 ? (
                          <ul className='todo-list'>
                          {toDos.map((name, index) => (
                            <div className='todo'>
                              <li key ={index} > 
                              {name} 
                              <button className='delete-button' onClick={()=> {deleteToDo(name)}}><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="10" fill="#999999"/>
<path d="M28.7969 10.9844H9.20312" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3282 16.3281V23.4531" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6719 16.3281V23.4531" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0156 10.9844V27.9062C27.0156 28.1425 26.9218 28.369 26.7547 28.536C26.5877 28.703 26.3612 28.7969 26.125 28.7969H11.875C11.6388 28.7969 11.4122 28.703 11.2452 28.536C11.0782 28.369 10.9843 28.1425 10.9843 27.9062V10.9844" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.4531 10.9844V9.20313C23.4531 8.73071 23.2655 8.27764 22.9314 7.94359C22.5974 7.60954 22.1443 7.42188 21.6719 7.42188H16.3281C15.8557 7.42188 15.4026 7.60954 15.0686 7.94359C14.7345 8.27764 14.5469 8.73071 14.5469 9.20313V10.9844" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>                   

    { edit && 
          <div className='newInput'>
            
            <input 
            className='myNewInput'
            name='newName'
            // value={NewName}
            key={index}
            onChange={ (elem)=>{setNewName(elem.target.value)}}
            />
            <button type='submit' onClick={editToDo}>Edit</button>
          
          </div>
          
        }    
      
            
          


                              </li>
                              < button className='b' onClick={clearAll}>Clear all</button>
                             
                             < button className='b' onClick={editName}>Edit</button>


                              
                            </div>
                          ))}
                        </ul>
            ) : (
              <div className='empty'>
                
                </div> 
            )}

            </div>
              </>
    )
}

