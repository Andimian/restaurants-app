import { FC, ReactNode } from 'react';

type Props = {
	onClick: () => void,
	children?: ReactNode,
}

export const Button: FC<Props> = ({onClick, children}) => {
	return (
		<button onClick={onClick}>{children}</button>
	);
};
