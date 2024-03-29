'use client';

import { FC, ReactElement, ReactNode } from 'react';

type Props = {
	onClick: () => void,
	title: string,
	children?: ReactElement<any, any>,
	disabled?: boolean,
	className?: string,
}

export const Button: FC<Props> = ({onClick, children, className}) => {
	return (
		<button onClick={onClick} className={className}>{children}</button>
	);
};
