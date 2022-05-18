import MOCK_DATA from '../../../public/data/stays.json';
import Tag from '../Tag';
import Typography from '../Typography';

type StayType = typeof MOCK_DATA[0];

interface Props {
	stay: StayType;
}

function Card({ stay }: Props) {
	return (
		<div>
			<section className='mt-6'>
				<img
					src={stay.photo}
					alt={`Image of ${stay.city}`}
					style={{ borderRadius: '24px' }}
				/>
			</section>

			<section className='mt-3'>
				<div className='flex justify-between items-center flex-wrap'>
					<div className='flex justify-between items-center'>
						{stay.superHost && <Tag text='Super host' />}

						<Typography
							variant='h4'
							color='tertiary'
							className={stay.superHost ? 'ml-2' : ''}
						>
							{stay.type}
						</Typography>
					</div>

					<Typography variant='h4' color='secondary'>
						⭐️ ${stay.rating.toFixed(2)}
					</Typography>
				</div>

				<Typography variant='h2' className='mt-2'>
					{stay.title}
				</Typography>
			</section>
		</div>
	);
}

export default Card;
