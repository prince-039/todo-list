import { useState } from "react";
import TodoList from "../TodoList/TodoList";



function Todo({todoData, isFinished, changeFinished, onDelete, onEdit }) {
    const[ finished, setFinished ] = useState(isFinished);

    const[isEditting, setIsEditting] = useState(false);
    const[editText, setEditText] = useState('');
    return (
       
        <div>
            <input type="checkbox" checked = {finished} onChange={(e) => {
            setFinished(e.target.checked);
            changeFinished(e.target.checked);
            }}/>
         {isEditting ? (
  <input type="text" value={editText} onChange={e => setEditText(e.target.value)} />
) : (
  <span>{todoData}</span>
)}
          <button onClick={() => {
            setIsEditting(!isEditting);
            onEdit(editText);
          }}>{(!isEditting) ? 'Edit' : 'Save'}</button>
          
          <button onClick={onDelete}> Delete </button>
        </div>
    );
}

export default Todo;