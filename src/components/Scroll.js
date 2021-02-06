import React from 'react';
//Every component of react have children
const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px transparent', height: '500px' }}>
		{props.children}
		</div>
		);
};

export default Scroll;