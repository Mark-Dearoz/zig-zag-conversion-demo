import React from 'react'
import './menu.css'
const Menu = (props) => {
	const renderOutputBox = () => {
		const boxes = []
		for (let i = 0; i < props.maxLength; i++)
			boxes.push(
				<div key={i} className="menu-box">
					{props.result[i] ? <h2>{props.result[i]}</h2> : null}
				</div>
			)
		return boxes
	}
	return (
		<div className="menu-container">
			<div className="menu-box-container">{renderOutputBox()}</div>
			<input
				className="menu-input"
				type="text"
				onChange={(e) => props.onChange(e)}
				value={props.value}
			></input>
			<button className="menu-button" onClick={props.onSubmit}>
				start
			</button>
		</div>
	)
}

export default Menu
