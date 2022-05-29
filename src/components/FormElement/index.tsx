import React from 'react';

type Props = {
	label?: string;
	htmlFor?: string;
};

const FormElement: React.FC<Props> = ({ label, htmlFor, children }) => {
	return (
		<div>
			{label && (
				<label
					htmlFor={htmlFor}
					className='block typography--family-secondary--variant-tag mb-1'
				>
					{label}
				</label>
			)}
			{children}
		</div>
	);
};

export default FormElement;
