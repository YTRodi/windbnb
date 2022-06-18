import React from 'react';
import { UseComboboxReturnValue } from 'downshift';
import classNames from 'classnames';
import { Section } from '@/enums';
import { Stay } from '@/constants/types';
import FormElement from '@/components/FormElement';
import Separator from '@/components/Separator';
import Typography from '@/components/Typography';

interface InputsSectionProps {
	shownSection: Section;
	setShownSection: React.Dispatch<React.SetStateAction<Section>>;
	getComboboxProps: UseComboboxReturnValue<Stay>['getComboboxProps'];
	getLabelProps: UseComboboxReturnValue<Stay>['getLabelProps'];
	getInputProps: UseComboboxReturnValue<Stay>['getInputProps'];
	adultsCount: number;
	childrenCount: number;
}

const inputStyle = {
	border: 0,
	outline: 0,
};

function InputsSection({
	shownSection,
	setShownSection,
	getComboboxProps,
	getLabelProps,
	getInputProps,
	adultsCount,
	childrenCount,
}: InputsSectionProps) {
	const isLocationSectionShown = shownSection === Section.LOCATION;
	const isGuestsSectionShown = shownSection === Section.GUESTS;

	function formatGuestsValue(adultsCount: number, childrenCount: number) {
		return `${adultsCount} ${
			adultsCount === 1 ? 'adult' : 'adults'
		} - ${childrenCount} ${childrenCount === 1 ? 'child' : 'children'}`;
	}

	return (
		<section
			className='mt-4 rounded-2xl'
			style={{
				boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
			}}
		>
			<div
				className={classNames('p-4 rounded-t-2xl', {
					'outline outline-1': isLocationSectionShown,
				})}
				{...getComboboxProps()}
				onClick={() => setShownSection(Section.LOCATION)}
			>
				<FormElement {...getLabelProps()} label='location'>
					<input
						autoFocus
						id='location'
						type='text'
						className='typography--family-secondary--variant-h1 typography--color-primary w-full'
						placeholder='City'
						style={inputStyle}
						{...getInputProps()}
					/>
				</FormElement>
			</div>
			<Separator />
			<div
				className={classNames('p-4 rounded-b-2xl', {
					'outline outline-1': isGuestsSectionShown,
				})}
				onClick={() => setShownSection(Section.GUESTS)}
			>
				<FormElement label='guests'>
					{adultsCount > 0 ? (
						<Typography variant='h1' family='secondary'>
							{formatGuestsValue(adultsCount, childrenCount)}
						</Typography>
					) : (
						<Typography variant='h1' family='secondary' color='tertiary'>
							Add guests
						</Typography>
					)}
				</FormElement>
			</div>
		</section>
	);
}

export default InputsSection;
