'use client';

import React, { FC } from 'react';
import { Restaurant } from '@/services/api';
import { Button } from '@/components/component';
import Link from 'next/link';

type Props = {
	restaurants: Restaurant[],
}
export const Tabs: FC<Props> = ({restaurants}) => {

	return (
		<div>
			{restaurants.map((restaurant) => (
				<Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
					{restaurant.name}
				</Link>
			))}
		</div>
	);
};
