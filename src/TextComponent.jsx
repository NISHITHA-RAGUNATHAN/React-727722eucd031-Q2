import React, { Component } from 'react'

export default class TextComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {count : 0,
        text : 'Hello From  SKCET!',
        }
    }
    handleClick = () =>{
        this.setState(prevState =>{
            return{
                count : prevState.count + 1
            }
        })
        }
    
    handleChange = (e) => {
       this.setState(prevState =>
        {
            return{
                text:e.target.value
            }
        })
    }
  render() {
    return (
      <div>
      
      <textarea rows={5} cols={30} value={this.state.text} onChange={this.handleChange} ></textarea>
      <p>Current Value :  
      {this.state.text}</p>
      </div>
    )
  }
}

