import React,{ Component } from 'react'

export	default class ToDoLists extends Component {

	renderList(){
		return this.props.todos.map((todo,index)=>{
			return (
				<li key={todo.id}> 
					{todo.text} 
					<button onClick={this.props.onDelete.bind(null,index)}>x</button> 
				</li>
			)
		})
	}

	render(){
		console.log(this.props.todos)
		return	(
			<div>
				<h1> Todos </h1>
			 	<ul>
				 	{ this.renderList() }
				</ul>
			</div>
		)
	}
}