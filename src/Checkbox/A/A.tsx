import React from 'react'
import styled from 'styled-components'

import png from '../../assets/1.png'

const Wrap = styled.div`
	display: flex;
`

interface CheckboxProps {
	type?: string
}

const A = (props: CheckboxProps) => {
	return (
		<Wrap>
			<img src={png} alt="" />
		</Wrap>
	)
}

export default A
