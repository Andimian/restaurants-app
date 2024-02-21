'use client';

import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode,
	onClick: () => void,
}

export const Button: FC<Props> = ({ children, onClick }) => {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
};
