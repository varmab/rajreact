import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[]
        }
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" name="todo"/>
                <button>Add Todo</button>
            </div>
        )
    }
}

export default Todos;