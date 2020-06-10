import React, {Component} from 'react'

class Book extends Component{
    constructor(props){
        super(props);

        this.state={
            book:props.book
        }
    }

    add=()=>{
        this.props.addToWishlist(this.state.book)
    }

    render(){
        return(
            <div>
                <h1>{this.state.book.title}</h1>
                <button onClick={this.add}>Add to Wishlist</button>
            </div>
        )
    }
}

export default Book;