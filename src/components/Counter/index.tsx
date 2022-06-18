import React from 'react';

interface Props {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	text: string;
	disabled?: boolean;
}

function Counter({ onClick, text, disabled = false }: Props) {
	return (
		<button
			type='button'
			className='px-2 rounded-md'
			style={{
				border: '1px solid #828282',
				color: '#828282',
			}}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
}

export default Counter;
