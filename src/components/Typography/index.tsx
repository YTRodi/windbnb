import React, { ComponentProps } from 'react';
import classNames from 'classnames';

type Props = ComponentProps<'p'> & {
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'tag';
	color?: 'primary' | 'secondary' | 'tertiary';
};

const Typography: React.FC<Props> = ({
	variant = 'h2',
	color = 'primary',
	children,
	...props
}) => {
	return (
		<p
			{...props}
			className={classNames(props.className, {
				[`typography--variant-${variant}`]: variant,
				[`typography--color-${color}`]: color,
			})}
		>
			{children}
		</p>
	);
};

export default Typography;
