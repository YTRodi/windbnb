import Typography from '@/components/Typography';
import GuestCounter from '@/components/GuestCounter';

function GuestsSection() {
	return (
		<section>
			<div className='ml-4 mt-9'>
				<div>
					<Typography family='secondary' variant='h1'>
						Adults
					</Typography>
					<Typography family='secondary' variant='h1' color='tertiary'>
						Ages 13 or above
					</Typography>
					<GuestCounter
						onAdd={() => console.log('add')}
						onSubstract={() => console.log('substract')}
					/>
				</div>
			</div>

			<div className='ml-4 mt-9'>
				<div>
					<Typography family='secondary' variant='h1'>
						Children
					</Typography>
					<Typography family='secondary' variant='h1' color='tertiary'>
						Ages 2-12
					</Typography>
					<GuestCounter
						onAdd={() => console.log('add')}
						onSubstract={() => console.log('substract')}
					/>
				</div>
			</div>
		</section>
	);
}

export default GuestsSection;
