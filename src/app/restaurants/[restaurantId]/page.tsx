import { getRestaurantsById } from '@/services/api';

type TParams = {
	params: {
		restaurantId: Record<string, string>;
	}
};

const RestaurantPage = async ({ params }: TParams) => {
	const restaurant = await getRestaurantsById(params.restaurantId);
	return (
		<div>
			Страница ресторана: {restaurant.name}
			<div>{restaurant.description}</div>
		</div>
	);
};

export default RestaurantPage;