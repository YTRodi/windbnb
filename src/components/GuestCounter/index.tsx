import React from 'react';
import Counter from '../Counter';
import Typography from '../Typography';

interface Props {
	value: number;
	onAdd: React.MouseEventHandler<HTMLButtonElement>;
	onSubstract: React.MouseEventHandler<HTMLButtonElement>;
}

function GuestCounter({ value = 0, onAdd, onSubstract }: Props) {
	const valueIsZero = value === 0;

	return (
		<div className='flex items-center gap-4 mt-3'>
			<Counter onClick={onSubstract} text='-' disabled={valueIsZero} />
			<Typography variant='h1'>{value}</Typography>
			<Counter onClick={onAdd} text='+' />
		</div>
	);
}

export default GuestCounter;
