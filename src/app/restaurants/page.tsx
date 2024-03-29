import React from 'react';
import { getRestaurants, Restaurant } from '@/services/api';
import { Tabs } from '@/components/tabs/component';

const RestaurantsPage = async () => {
	const restaurants: Restaurant[] = await getRestaurants({withoutCache: false});
	return (
		<Tabs restaurants={restaurants}/>
)
	;
};

export default RestaurantsPage;