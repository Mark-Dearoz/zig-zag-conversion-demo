import React from 'react'
import { useTransition, animated } from 'react-spring'
import './node.css'

const Node = (props) => {
	const transition = useTransition(props.children, {
		from: { opacity: 0.5, y: -20 },
		enter: { opacity: 1, y: 0 },
		leave: { opacity: 0, y: 20 },
	})
	return (
		<div className="node-container">
			{transition((style, item) =>
				item ? (
					<animated.h2 className="node-h2" style={style}>
						{item}
					</animated.h2>
				) : (
					''
				)
			)}
		</div>
	)
}

export default Node
