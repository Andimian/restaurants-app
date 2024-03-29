'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/index';
import { FC, ReactNode } from 'react';

type Prop = {
	children: ReactNode
}

export const StoreProvider: FC<Prop> = ({children}) => {
	return <Provider store={store}>{children}</Provider>
}