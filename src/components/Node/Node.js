import React from 'react'
import './node.css'

const Node = (props) => {
	return (
		<div className="node-container">
			<h2 className="node-h2" style={{ opacity: props.children ? '100' : 0 }}>
				{props.children}
			</h2>
		</div>
	)
}

export default Node
