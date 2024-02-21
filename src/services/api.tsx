export type Restaurant = {
	id: string,
	name: string,
	description: string,
	img: string,
	menu: string[],
	reviews: string[],
}

export async function getRestaurants(): Promise<Restaurant[]> {
	const response = await fetch('http://localhost:3001/api/restaurants');
	return await response.json();
}