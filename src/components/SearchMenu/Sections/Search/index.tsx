import Typography from '@/components/Typography';

const redColor = 'rgba(235, 87, 87, 0.9)';

function SearchSection() {
	return (
		<section className='flex justify-center mt-4'>
			<button
				className='px-6 py-4 border rounded-2xl flex justify-center items-center gap-3'
				style={{ backgroundColor: redColor }}
			>
				<span>🔍</span>
				<Typography family='primary' color='alternative'>
					Search
				</Typography>
			</button>
		</section>
	);
}

export default SearchSection;
