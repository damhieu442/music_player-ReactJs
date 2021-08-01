import React from 'react';
import './Progress.css';

const Progress = () => {
	return (
		<div>
			<input
				id="progress"
				className="progress"
				type="range"
				// defaultValue={0}
				step="{1}"
				min="{0}"
				max="{100}"
			/>
		</div>
	);
};

export default Progress;
