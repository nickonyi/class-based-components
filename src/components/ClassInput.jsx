import { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
        todos:[
          {task:"one task",isEditing:false},
          {task:"is all it takes",isEditing:false},
         {task:"to fall in love with me",isEditing:false}
        ],
        inputVal:"",
        editVal:""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
        ...state,
        inputVal:e.target.value
    }))
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState((state) => ({
        todos:state.todos.concat(state.inputVal),
        inputVal:""
    }))
  }

  handleDelete(index){
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter((todo,i) => i!== index);
      return {todos:updatedTodos}
    })
  }

  handleEditChange(e){
    this.setState({editVal:e.target.value});
  }

  toggleEdit(index) {
    
    this.setState((prevState) => (
      {
      todos:prevState.todos.map((todo,i)=> i === index? {...todo,isEditing:!todo.isEditing}:todo),
      editVal:todoToEdit.isEditing?"":todoToEdit.task
    }))
  }

  submitEdit (index) {

    this.setState((prevState) => (
      {
        todos:prevState.todos.map((todo,i) => i === index?{...todo,task:prevState.editVal,isEditing:false}:todo),
        editVal:""
      }
    ))
  }

  render(){
    const todos = this.state.todos;
    console.log(todos);
    
    return (
    <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input 
          type="text" 
          name="task-entry"
          value={this.state.inputVal} 
          onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count todos ={todos} />
        {/* The list of all the To-Do's, displayed */}
        <ul>
            {
                this.state.todos.map((todo,index) =>(
                  
                 
                    
                  
                    <li key={todo}>
                    {todo.isEditing?(
                      <input 
                      type="text" 
                      value={todo.editVal}
                      onChange={this.handleEditChange}
                      />
                    ):(
                      <span>{todo.task}</span>
                    )}
                    <button onClick={() => (todo.isEditing? this.submitEdit(index):this.toggleEdit(index))}>
                      {
                        todo.isEditing?"Resubmit":"Edit"
                      }
                      </button>
                    <button onClick={()=> this.handleDelete(index)} className="delete">
                      Delete
                    </button>
                    </li>
                ))
            }
            </ul>
    </section>)
  }

}


export default ClassInput;