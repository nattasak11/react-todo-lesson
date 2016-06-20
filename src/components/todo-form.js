import React,{ Component } from 'react'

export	default class ToDoForm extends Component {

	constructor(){
		super()
		this.state = {
			text : ''
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	handleChange(event) {
    	this.setState({text: event.target.value})
  	}

	onFormSubmit(e){
		e.preventDefault()
		this.props.onSubmit(this.state.text)
	}

	render(){
		return	(
			<form onSubmit={this.onFormSubmit.bind(this)}>
			 	<input 
			 		type="text" 
			 		value={this.state.text}
			 		onChange={this.handleChange.bind(this)}
			 	/>
			 	<button type="submit">Add</button>
			 </form> 
		)
	}
}