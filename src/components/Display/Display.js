import React from 'react'
import Node from '../Node/Node'
import './display.css'

const Display = (props) => {
	const renderNodes = () => {
		const nodeMatrix = []
		for (let row = 0; row < props.row; row++) {
			const nodeArray = []
			for (let col = 0; col < props.col; col++) {
				const node = props.nodes[`${row},${col}`]
				nodeArray.push(<Node key={`${row},${col}`}>{node?.letter}</Node>)
			}
			nodeMatrix.push(
				<div key={row} className="display-row">
					{nodeArray}
				</div>
			)
		}
		return nodeMatrix
	}
	return <div className="display-container">{props.nodes ? renderNodes() : null}</div>
}

export default Display
