/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'

import './App.css'

const App = () => {

	// Array Destructuring
	const [stack, setStack] = useState("")

	const items = words(stack, /[^-^+^*^/]+/g)
	const value = items.length > 0 ? items[items.length-1] : 0

	console.log("Renderización de la App", value);

	const clickHandler = number => {
		console.log("Button.clickHandler", number)
		setStack(`${stack}${number}`)
	}

	const onClickOperation = operation => {
		console.log("Button.onClickOperation", operation)
		setStack(`${stack}${operation}`)
	}

	const onClickEqual = text => {
		console.log("Button.onClickEqual", text)
		setStack(eval(stack).toString())
	}

	const onContentClear = () => {
		setStack("")
	}

	const onDelete = () => {
		if ( stack.length > 0 ) {
			const newStack = stack.substring(0, stack.length - 1)
			console.log("Button.onDelete", newStack)
			setStack(newStack)
		}
	}

	return (
	<main className="react-calculator">

		<Result value={value} />

		<Numbers onClickNumber={ clickHandler } />

		<Functions onContentClear={ onContentClear } onDelete={ onDelete } />

		<MathOperations onClickOperation={ onClickOperation } onClickEqual={ onClickEqual } />
		
	</main>)
}

export default App;
