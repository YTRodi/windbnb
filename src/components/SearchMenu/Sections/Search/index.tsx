import classNames from 'classnames';
import Typography from '@/components/Typography';

interface Props {
	disabled: boolean;
}

const redColor = 'rgba(235, 87, 87, 0.9)';

function SearchSection({ disabled }: Props) {
	return (
		<section className='flex justify-center mt-4'>
			<button
				type='submit'
				className={classNames(
					'px-6 py-4 border rounded-2xl flex justify-center items-center gap-3'
				)}
				style={{
					// TODO: add in taildwindcss config: gray-5
					backgroundColor: disabled ? '#f2f2f2' : redColor,
				}}
				{...{ disabled }}
			>
				<span>🔍</span>
				<Typography
					family='primary'
					color={disabled ? 'tertiary' : 'alternative'}
				>
					Search
				</Typography>
			</button>
		</section>
	);
}

export default SearchSection;
