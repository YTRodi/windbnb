import Typography from '@/components/Typography';
import GuestCounter from '@/components/GuestCounter';

interface Props {
	adultsCount: number;
	addAdult: () => void;
	removeAdult: () => void;
	childrenCount: number;
	addChild: () => void;
	removeChild: () => void;
}

function GuestsSection({
	adultsCount,
	addAdult,
	removeAdult,
	childrenCount,
	addChild,
	removeChild,
}: Props) {
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
						value={adultsCount}
						onAdd={addAdult}
						onSubstract={removeAdult}
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
						value={childrenCount}
						onAdd={() => {
							if (adultsCount === 0) {
								addAdult();
							}

							addChild();
						}}
						onSubstract={removeChild}
					/>
				</div>
			</div>
		</section>
	);
}

export default GuestsSection;
