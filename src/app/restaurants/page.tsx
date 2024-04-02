import React from 'react';
import { lusitana } from '@/app/ui/fonts';

const RestaurantsPage = async () => {
	// const restaurants: Restaurant[] = await getRestaurants({withoutCache: false});
	return (<>
			{/*<Tabs restaurants={restaurants}/>*/}
			<p className={ lusitana.className }>
				 Тест шрифта
			</p>
	</>

)
	;
};

export default RestaurantsPage;
