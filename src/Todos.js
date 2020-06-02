import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            todo:event.target.value
        })
    }

    addTodo=(e)=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    // this.state.todos.concat(this.state.todo)

    removeTodo=(todo)=>{
        this.setState({
            todos:this.state.todos.filter((currentTodo)=>{
                return currentTodo!==todo;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map((todo,index)=>{
                            return <li key={index}>{todo}
                                <button onClick={()=>{
                                    this.removeTodo(todo);
                                }}>Remove</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;