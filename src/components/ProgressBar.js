import React from 'react'
import './ProgressBar.css'

import {useStateContext} from '../context/StateContext'

function ProgressBar() {
	const { progressBarWidth } = useStateContext();
	return (
		<div className='progress-bar-container'>
			<div className='progress-bar' style={{width: `${progressBarWidth}%`}}></div>
		</div>
	);
}

export default ProgressBar