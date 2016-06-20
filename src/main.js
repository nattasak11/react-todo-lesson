import React,{ Component } from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form.js'
import TodoLists from './components/todo-lists.js'

class App extends Component {
	render(){
		return (
			<div>  

			<TodoForm />

			<TodoLists />

			</div>
		)
	}
}

render(<App />, document.getElementById('app'))