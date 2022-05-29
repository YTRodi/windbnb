import React from 'react';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	text: string;
}

function Counter({ onClick, text }: Props) {
	return (
		<button
			className='px-2 rounded-md'
			style={{
				border: '1px solid #828282',
				color: '#828282',
			}}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

export default Counter;
