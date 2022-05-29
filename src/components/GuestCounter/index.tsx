import React from 'react';
import Counter from '../Counter';
import Typography from '../Typography';

interface Props {
	onAdd: React.MouseEventHandler<HTMLButtonElement>;
	onSubstract: React.MouseEventHandler<HTMLButtonElement>;
}

function GuestCounter({ onAdd, onSubstract }: Props) {
	return (
		<div className='flex items-center gap-4 mt-3'>
			<Counter onClick={onSubstract} text='-' />
			<Typography variant='h1'>{0}</Typography>
			<Counter onClick={onAdd} text='+' />
		</div>
	);
}

export default GuestCounter;
