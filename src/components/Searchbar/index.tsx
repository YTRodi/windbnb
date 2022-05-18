import Separator from '../Separator';

function SearchBar() {
	return (
		<div
			className='flex rounded-2xl'
			style={{
				background: '#FFFFFF',
				boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.5)',
				height: '55px',
				maxWidth: '320px',
			}}
		>
			<div className='flex justify-center items-center px-4'>
				<p
					style={{
						fontWeight: 400,
						fontSize: '14px',
						lineHeight: '18px',
					}}
				>
					Helsinki, Finland
				</p>
			</div>
			<Separator />
			<div className='flex justify-center items-center px-4'>
				<p
					style={{
						fontWeight: 400,
						fontSize: '14px',
						lineHeight: '18px',
					}}
				>
					Add guests
				</p>
			</div>
			<Separator />
			<div className='flex justify-center items-center px-4'>🔍</div>
		</div>
	);
}

export default SearchBar;
