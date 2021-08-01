import React from 'react';
import './cd.css';

const Cd = ({ src }) => {
	return (
		<div className="cd">
			<div
				className="cd-thumb"
				style={{
					backgroundImage: `url(${src})`,
				}}
			></div>
		</div>
	);
};

export default Cd;
