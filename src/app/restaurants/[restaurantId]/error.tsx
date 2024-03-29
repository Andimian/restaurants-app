'use client';

const Error = ({error, reset}) => {
	return (
		<div>
			Error <button onClick={reset}>Reset</button>
		</div>
	);
};

export default Error;