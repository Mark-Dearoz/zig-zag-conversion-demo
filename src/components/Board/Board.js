import React, { useEffect, useState } from 'react'
import Grid from '../Display/Display'
import Menu from '../Menu/Menu'
import { stringToNodes } from '../../algorithm/ZigZagConversion'
import './board.css'
const INIT_STATE = {}
const NUM_OF_ROW = 6
const NUM_OF_COL = (NUM_OF_ROW - 1) * 2 + 1
const MAX_LENGTH = 3 * NUM_OF_ROW + NUM_OF_COL - 3
const ANIMATION_TIME = 175
const Board = () => {
	const [nodes, setNodes] = useState(null)
	const [input, setInput] = useState('')
	const [result, setResult] = useState('')
	const [disabled, setDisabled] = useState(false)

	useEffect(() => {
		for (let row = 0; row < NUM_OF_ROW; row++) {
			for (let col = 0; col < NUM_OF_COL; col++) INIT_STATE[`${row},${col}`] = { letter: '' }
		}
		setNodes(INIT_STATE)
	}, [])

	const animate = (time) => {
		const newNodes = stringToNodes(input, NUM_OF_ROW, NUM_OF_COL)
		const nodeKeys = Object.keys(newNodes)
		let i = 0
		const displayAnimation = setInterval(() => {
			const key = nodeKeys[i]
			setNodes((prevState) => {
				const newState = { ...prevState }
				newState[key] = newNodes[key]
				return newState
			})
			i++
			if (i === nodeKeys.length) clearInterval(displayAnimation)
		}, time)
		setTimeout(() => {
			nodeKeys.sort((a, b) => {
				let [a1, a2] = a.split(',')
				let [b1, b2] = b.split(',,')
				if (a1 === b1) return parseInt(a2) - parseInt(b2)
				return parseInt(a1) - parseInt(b1)
			})
			i = 0
			const outputAnimation = setInterval(() => {
				const key = nodeKeys[i]
				setNodes((prevState) => {
					const newState = { ...prevState }
					newState[key] = { letter: '' }
					return newState
				})
				setResult((prevState) => prevState.concat(newNodes[key].letter))
				i++
				if (i === nodeKeys.length) clearInterval(outputAnimation)
			}, time)
		}, time * nodeKeys.length)
		setTimeout(() => {
			setDisabled(false)
		}, time * nodeKeys.length * 2 + 100)
	}
	const submit = () => {
		if (disabled) return
		if (input.length === 0) return
		setDisabled(true)
		setNodes(INIT_STATE)
		setResult('')
		animate(ANIMATION_TIME)
	}
	const handleInput = (event) => {
		const new_input = event.target.value
		if (new_input.length > MAX_LENGTH) return
		setInput(new_input)
	}
	return (
		<div className="board-container">
			<Grid row={NUM_OF_ROW} col={NUM_OF_COL} nodes={nodes}></Grid>
			<Menu
				onChange={handleInput}
				onSubmit={submit}
				value={input}
				maxLength={MAX_LENGTH}
				result={result}
			></Menu>
		</div>
	)
}

export default Board
