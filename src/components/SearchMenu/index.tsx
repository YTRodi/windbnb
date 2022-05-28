import React, { useState } from 'react';
import classNames from 'classnames';
import MOCK_DATA from 'public/data/stays.json';
import Separator from '../Separator';
import Typography from '../Typography';
import GuestCounter from '../GuestCounter';
import { Section } from '@/enums';
import FormElement from '../FormElement';

const inputStyle = {
	border: 0,
	outline: 0,
};

interface Props {
	setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchMenu({ setShowSearchMenu }: Props) {
	const [shownSection, setShownSection] = useState<Section>(Section.LOCATION);

	return (
		<div>
			<HeaderSection setShowSearchMenu={setShowSearchMenu} />
			<FormSection
				shownSection={shownSection}
				setShownSection={setShownSection}
			/>
			{
				{
					[Section.LOCATION]: <LocationSection />,
					[Section.GUESTS]: <GuestsSection />,
				}[shownSection]
			}
			<SearchSection />
		</div>
	);
}

function HeaderSection({ setShowSearchMenu }: Props) {
	return (
		<section className='flex justify-between items-center'>
			<Typography family='secondary'>Edit your search</Typography>
			<button onClick={() => setShowSearchMenu(false)}>x</button>
		</section>
	);
}

function FormSection({
	shownSection,
	setShownSection,
}: {
	shownSection: Section;
	setShownSection: React.Dispatch<React.SetStateAction<Section>>;
}) {
	return (
		<section
			className='mt-4 rounded-2xl'
			style={{
				boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
			}}
		>
			<div
				className={classNames('p-4 rounded-t-2xl', {
					'outline outline-1': shownSection === Section.LOCATION,
				})}
			>
				<FormElement htmlFor='location' label='location'>
					<input
						autoFocus
						id='location'
						type='search'
						className='typography--family-secondary--variant-h1'
						placeholder='City'
						style={inputStyle}
						onFocus={() => setShownSection(Section.LOCATION)}
					/>
				</FormElement>
			</div>
			<Separator />
			<div
				className={classNames('p-4 rounded-b-2xl', {
					'outline outline-1': shownSection === Section.GUESTS,
				})}
			>
				<FormElement htmlFor='guests' label='guests'>
					<input
						id='guests'
						type='search'
						className='typography--family-secondary--variant-h1'
						placeholder='Add guests'
						style={inputStyle}
						onFocus={() => setShownSection(Section.GUESTS)}
					/>
				</FormElement>
			</div>
		</section>
	);
}

function LocationSection() {
	return (
		<section className='ml-4 mt-9'>
			{MOCK_DATA.map((stay, index) => (
				<div key={index} className='flex mb-9'>
					<Typography family='secondary' variant='h1' color='secondary'>
						🏚 {stay.city}, {stay.country}
					</Typography>
				</div>
			))}
		</section>
	);
}

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

function SearchSection() {
	return (
		<section className='flex justify-center mt-4'>
			<button
				className='px-6 py-4 border rounded-2xl flex justify-center items-center gap-3'
				style={{ backgroundColor: 'rgba(235, 87, 87, 0.9)' }}
			>
				<span>🔍</span>
				<Typography family='primary' color='alternative'>
					Search
				</Typography>
			</button>
		</section>
	);
}

export default SearchMenu;
