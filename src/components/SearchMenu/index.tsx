import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import MOCK_DATA from 'public/data/stays.json';
import { Stay } from '@/constants/types';
import { Section } from '@/enums';
import { Header, Form, Location, Guests, Search } from './Sections';

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

	console.log('selectedItem :>> ', selectedItem);

	return (
		<div>
			<Header setShowSearchMenu={setShowSearchMenu} />
			<Form
				{...{
					shownSection,
					setShownSection,
					getComboboxProps,
					getLabelProps,
					getInputProps,
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
					[Section.GUESTS]: <Guests />,
				}[shownSection]
			}
			<Search />
		</div>
	);
}

export default SearchMenu;
