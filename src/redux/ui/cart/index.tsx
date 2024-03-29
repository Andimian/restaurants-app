import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, number> = {};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increment: (state, { payload: productId }) => {
			state[productId] = (state[productId] || 0) + 1;
		},
		decrement: (state, { payload: productId }) => {
			state[productId] = (state[productId] || 0) - 1;
			if (state[productId] <= 0) {
				delete state[productId];
			}
		},
		setAmount: (state, { payload: {dishId, amount} }) => {
			state[dishId] = amount;
			if (state[dishId] <= 0) {
				delete state[dishId];
			}
		},
	},
	selectors: {
		selectProductAmountById: (state, productId) => {
			return state[productId] || 0;
		},
		selectProductAmount: (state) =>
			Object.values(state).reduce((acc, amount) => {
				return acc + amount;
			}, 0),
		selectCartProductIds: (state) => Object.keys(state),
	},
});

export const {
	selectProductAmountById,
	selectProductAmount,
	selectCartProductIds,
} = cartSlice.selectors;
export const { increment, decrement, setAmount } = cartSlice.actions;
