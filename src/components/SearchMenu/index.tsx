import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import MOCK_DATA from 'public/data/stays.json';
import { useCounter } from '@/hooks';
import { Stay } from '@/constants/types';
import { Section } from '@/enums';
import { Header, Inputs, Location, Guests, Search } from './Sections';

const seen = new Set();
const filteredItems = MOCK_DATA.filter(item => {
	const duplicate = seen.has(item.city);
	seen.add(item.city);
	return !duplicate;
});

interface Props {
	setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchMenu({ setShowSearchMenu }: Props) {
	const [shownSection, setShownSection] = useState<Section>(Section.LOCATION);
	const [inputItems, setInputItems] = useState(filteredItems);
	const {
		isOpen,
		getLabelProps,
		getComboboxProps,
		getInputProps,
		getMenuProps,
		getItemProps,
		highlightedIndex,
		selectedItem,
	} = useCombobox<Stay>({
		isOpen: true,
		items: filteredItems,
		itemToString: item => (item ? `${item.city}, ${item.country}` : ''),
		onInputValueChange: ({ inputValue }) => {
			setInputItems(
				filteredItems.filter(
					item =>
						item.city.toLowerCase().startsWith(inputValue!.toLowerCase()) ||
						item.country.toLowerCase().startsWith(inputValue!.toLowerCase())
				)
			);
		},
	});
	const {
		count: adultsCount,
		increment: addAdult,
		decrement: removeAdult,
	} = useCounter();
	const {
		count: childrenCount,
		increment: addChild,
		decrement: removeChild,
	} = useCounter();

	return (
		<div>
			<Header setShowSearchMenu={setShowSearchMenu} />
			<form
				onSubmit={event => {
					event.preventDefault();

					console.log('selectedItem', selectedItem);
					console.log('adultsCount :>> ', adultsCount);
					console.log('childrenCount :>> ', childrenCount);
				}}
			>
				<Inputs
					{...{
						shownSection,
						setShownSection,
						getComboboxProps,
						getLabelProps,
						getInputProps,
						adultsCount,
						childrenCount,
					}}
				/>
				{
					{
						[Section.LOCATION]: (
							<Location
								{...{
									isOpen,
									getMenuProps,
									inputItems,
									highlightedIndex,
									getItemProps,
								}}
							/>
						),
						[Section.GUESTS]: (
							<Guests
								{...{
									adultsCount,
									addAdult,
									removeAdult,
									childrenCount,
									addChild,
									removeChild,
								}}
							/>
						),
					}[shownSection]
				}
				<Search disabled={!selectedItem || adultsCount < 1} />
			</form>
		</div>
	);
}

export default SearchMenu;
