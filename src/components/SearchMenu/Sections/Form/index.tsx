import { UseComboboxReturnValue } from 'downshift';
import React from 'react';
import classNames from 'classnames';
import { Section } from '@/enums';
import { Stay } from '@/constants/types';
import FormElement from '@/components/FormElement';
import Separator from '@/components/Separator';

interface FormSectionProps {
	shownSection: Section;
	setShownSection: React.Dispatch<React.SetStateAction<Section>>;
	getComboboxProps: UseComboboxReturnValue<Stay>['getComboboxProps'];
	getLabelProps: UseComboboxReturnValue<Stay>['getLabelProps'];
	getInputProps: UseComboboxReturnValue<Stay>['getInputProps'];
}

const inputStyle = {
	border: 0,
	outline: 0,
};

function FormSection({
	shownSection,
	setShownSection,
	getComboboxProps,
	getLabelProps,
	getInputProps,
}: FormSectionProps) {
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
				{...getComboboxProps()}
			>
				<FormElement {...getLabelProps()} label='location'>
					<input
						autoFocus
						id='location'
						type='search'
						className='typography--family-secondary--variant-h1'
						placeholder='City'
						style={inputStyle}
						onFocus={() => setShownSection(Section.LOCATION)}
						{...getInputProps()}
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

export default FormSection;
