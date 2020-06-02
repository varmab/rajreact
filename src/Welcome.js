import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0,
            name:"Varma"
        }

    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <div>
                <label htmlFor="txtName"></label>
                <h1 onClick={this.updateClicks}>Welcome to {this.props.name} -- {this.props.year} ({this.state.clicks})</h1>
            </div>
        )
    }
}

Welcome.propTypes={
    name:PropTypes.string.isRequired,
    year:PropTypes.number,
    password(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
          return new Error(`${propName} was too short`)
        }
    }
}

Welcome.defaultProps={
    year:2021
}

export default Welcome;