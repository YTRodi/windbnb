import MOCK_DATA from 'public/data/stays.json';
import Card from '../Card';
import Typography from '../Typography';

function Stay() {
	return (
		<main>
			<section className='flex justify-between items-center'>
				<Typography variant='h1'>Stays in Finland</Typography>
				<Typography variant='h3'>12+ stays</Typography>
			</section>

			{MOCK_DATA.map((stay, index) => (
				<Card key={index} stay={stay} />
			))}
		</main>
	);
}

export default Stay;
