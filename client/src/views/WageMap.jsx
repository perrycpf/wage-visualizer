import React from 'react'
import mapImage from '../wagemap.jpg'

const WageMap = (props) => {
	return (
		<div className='Wage-Map'>
			<h1>Welcome to the Wage Visualizer!</h1>
			<img src={mapImage} alt="Wage Map" />
		</div>
	)
}

export default WageMap