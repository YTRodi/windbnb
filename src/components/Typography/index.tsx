import React, { ComponentProps } from 'react';
import classNames from 'classnames';

type Props = ComponentProps<'p'> & {
	family?: 'primary' | 'secondary';
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'tag';
	color?: 'primary' | 'secondary' | 'tertiary' | 'alternative';
};

const Typography: React.FC<Props> = ({
	family = 'primary',
	variant = 'h2',
	color = 'primary',
	children,
	...props
}) => {
	return (
		<p
			{...props}
			className={classNames(props.className, {
				[`typography--family-${family}`]: family,
				[`typography--family-${family}--variant-${variant}`]: variant,
				[`typography--color-${color}`]: color,
			})}
		>
			{children}
		</p>
	);
};

export default Typography;
