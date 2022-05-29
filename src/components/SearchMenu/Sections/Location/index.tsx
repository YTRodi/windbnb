import classNames from 'classnames';
import { UseComboboxReturnValue } from 'downshift';
import Typography from '@/components/Typography';
import { Stay } from '@/constants/types';

interface LocationSectionProps {
	isOpen: UseComboboxReturnValue<Stay>['isOpen'];
	getMenuProps: UseComboboxReturnValue<Stay>['getComboboxProps'];
	inputItems: Stay[];
	highlightedIndex: UseComboboxReturnValue<Stay>['highlightedIndex'];
	getItemProps: UseComboboxReturnValue<Stay>['getItemProps'];
}

const redColor = 'rgba(235, 87, 87, 0.9)';

function LocationSection({
	isOpen,
	getMenuProps,
	inputItems,
	highlightedIndex,
	getItemProps,
}: LocationSectionProps) {
	return (
		<section className='mt-9'>
			<ul {...getMenuProps()}>
				{isOpen &&
					inputItems.map((item, index) => (
						<LocationItem
							key={index}
							{...{
								item,
								isHighlighted: highlightedIndex === index,
								getItemProps,
								index,
							}}
						/>
					))}
			</ul>
		</section>
	);
}

interface LocationItemProps {
	item: Stay;
	isHighlighted: boolean;
	getItemProps: UseComboboxReturnValue<Stay>['getItemProps'];
	index: number;
}

function LocationItem({
	item,
	isHighlighted,
	getItemProps,
	index,
}: LocationItemProps) {
	return (
		<li
			className={classNames('p-4 cursor-pointer rounded-2xl', {
				'outline outline-1': isHighlighted,
			})}
			style={{
				outlineColor: isHighlighted ? redColor : undefined,
			}}
			{...getItemProps({ item, index })}
		>
			<Typography family='secondary' variant='h1' color='secondary'>
				🏚 {item.city}, {item.country}
			</Typography>
		</li>
	);
}

export default LocationSection;
