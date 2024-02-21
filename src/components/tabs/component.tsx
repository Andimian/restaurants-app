'use client';

import React, { FC } from 'react';
import { Restaurant } from '@/services/api';
import { Button } from '@/components/component';

type Props = {
	restaurants: Restaurant[],
}
export const Tabs: FC<Props> = ({restaurants}) => {

	return (
		<div>
			{restaurants.map((restaurant) => (
				<Button onClick={() => console.log(restaurant.name)}>{restaurant.name}</Button>
			))}
		</div>
	);
};
