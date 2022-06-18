import React from 'react';
import Separator from '../Separator';
import Typography from '../Typography';

interface Props {
	setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ setShowSearchMenu }: Props) {
	return (
		<div
			className='flex rounded-2xl'
			style={{
				background: '#FFFFFF',
				boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.5)',
				height: '55px',
			}}
			onClick={() => setShowSearchMenu(true)}
		>
			<input
				type='text'
				className='px-3 rounded-l-2xl typography--family-secondary--variant-h1 typography--color-primary
        '
				placeholder='City'
			/>
			<Separator />
			<div className='flex items-center'>
				<Typography family='secondary' variant='h1' color='tertiary'>
					Add guests
				</Typography>
			</div>
			<Separator />
			<div className='px-4 flex justify-center items-center'>🔍</div>
		</div>
	);
}

export default SearchBar;
