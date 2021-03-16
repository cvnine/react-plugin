import React from 'react'

import png from '../assets/1.png'

import './style.less'

export interface CheckboxProps {
	type?: string
}

const Checkbox = (props: CheckboxProps) => {
	return (
		<div>
			<img src={png} alt="" />
		</div>
	)
}

export default Checkbox
