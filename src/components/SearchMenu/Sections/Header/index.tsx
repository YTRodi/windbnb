import React from 'react';
import Typography from '@/components/Typography';

interface Props {
	setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderSection({ setShowSearchMenu }: Props) {
	return (
		<section className='flex justify-between items-center'>
			<Typography family='secondary'>Edit your search</Typography>
			<button onClick={() => setShowSearchMenu(false)}>x</button>
		</section>
	);
}

export default HeaderSection;
