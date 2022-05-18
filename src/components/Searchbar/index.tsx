import Separator from '../Separator';

function SearchBar() {
	const DEFAULT_SELECTED_CITY = 'Helsinski';

	// TODO: me quedé acá tratando de darle un width al primer input para que entre la ciudad y el país
	// TODO: quizás utilizar los flex:1,2,3 como react native, que el primer container ocupe casi la mitad del ancho

	// TODO #GOLD: usar porcentajes para el primer input

	return (
		<div
			className='flex rounded-2xl'
			style={{
				background: '#FFFFFF',
				boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.5)',
				height: '55px',
				width: '50x',
			}}
		>
			<input
				type='text'
				className='px-3 rounded-l-2xl'
				value={`${DEFAULT_SELECTED_CITY}, Finland`}
				onChange={e => {
					console.log('e', e);
				}}
				style={{
					// width: '165%',
					width: '136px',
					fontWeight: 400,
					fontSize: '14px',
					lineHeight: '18px',
				}}
			/>
			<Separator />
			<input
				type='text'
				className='px-3'
				// value='4 guests'
				placeholder='Add guests'
				onChange={e => {
					console.log('e', e);
				}}
				style={{
					// width: '100%',
					width: '104px',
					fontWeight: 400,
					fontSize: '14px',
					lineHeight: '18px',
				}}
			/>
			<Separator />
			<div className='px-4 flex justify-center items-center'>🔍</div>
		</div>
	);
}

export default SearchBar;
