import { revalidatePath } from 'next/cache';

export type Restaurant = {
	id: string,
	name: string,
	description: string,
	img: string,
	menu: string[],
	reviews: string[],
}

export async function getRestaurants({ withoutCache }: Record<string, boolean>): Promise<Restaurant[]> {
	const response = await fetch('http://localhost:3001/api/restaurants', {
		cache: withoutCache ? 'no-cache' : 'default',
		next: {
			// время жизни кеша
			revalidate: 60,
			/* ручка по которой запустится ревалидация кеша (сбросится кеш) - опичывается это дело в
			app/api/revalidate/route.tsx */
			tags: ['restaurants'],
		}
	});
	return await response.json();
};

export async function getRestaurantsById(restaurantId: Record<string, string>): Promise<Restaurant> {
	const response = await fetch('http://localhost:3001/api/restaurant/' + restaurantId);
	return await response.json();
};