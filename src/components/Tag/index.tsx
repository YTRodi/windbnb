import Typography from '../Typography';

function Tag({ text }: { text: string }) {
	return (
		<Typography
			variant='tag'
			className='border rounded-xl'
			style={{
				borderColor: '#4F4F4F',
				padding: '6px 8px',
			}}
		>
			{text}
		</Typography>
	);
}

export default Tag;
