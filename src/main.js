import React,{ Component } from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form.js'
import TodoLists from './components/todo-lists.js'

const initialTodos = [
	{id:1,text:"Go to School",done:false},
	{id:2,text:"Play football",done:false},
	{id:3,text:"Drink Beer",done:false},
]

class App extends Component {
	constructor(){
		super()
		this.state = {
			todos: initialTodos
		}

		this.handleDelete = this.handleDelete.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(text){
		console.log(text)
		let newTodo = {
			id: Date.now(),
			text: text,
			done: false,
		}
		let tempTodos = this.state.todos
		tempTodos.push(newTodo)
		this.setState({todos:tempTodos})
	}

	handleDelete(index){
		console.log('delete',index)
		let tempTodos = this.state.todos
		tempTodos.splice(index,1)

		this.setState({todos:tempTodos})
	}

	render(){
		return (
			<div>  

			<TodoForm
				onSubmit={this.handleSubmit}
			 />

			<TodoLists 
				todos={this.state.todos} 
				onDelete={this.handleDelete}
			/>

			</div>
		)
	}
}

render(<App />, document.getElementById('app'))