import React, { useState } from 'react'

function FuctionalInput({name}) {
     const [inputVal,setInputVal] = useState("");
     const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
    
    const handleInputChange = (e)=> {
        setInputVal(e.target.value);
    }

    const handleSubmit = (e)=> {
       e.preventDefault();
       setTodos((todo) => [...todo,inputVal]);
       setInputVal("");
    }
  return (
    <section>
        <h3>{name}</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        </form>
        <h4>All Todos</h4>
        <ul>
        {
            todos.map((todo) => (
                 <li key={todo}>{todo}</li>
            ))
        }
        </ul>
    </section>
  )
}

export default FuctionalInput