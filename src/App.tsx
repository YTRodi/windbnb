import MOCK_DATA from '../public/data/stays.json';
import { Card, Typography } from './components';

function App() {
	return (
		<div className='mx-3'>
			<header style={{ width: '297px', height: '55px', marginTop: '75px' }}>
				<p>Logo</p>
				<nav>Buscador</nav>
			</header>

			<main style={{ marginTop: '37px' }}>
				<section className='flex justify-between items-center'>
					<Typography variant='h1'>Stays in Finland</Typography>
					<Typography variant='h3'>12+ stays</Typography>
				</section>

				{MOCK_DATA.map((stay, index) => (
					<Card key={index} stay={stay} />
				))}
			</main>
		</div>
	);
}

export default App;
