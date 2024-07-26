import api from "./api"

export const OrdersService = {
    getOrders: async () => {
		return api.get('/order').then(res => res.data)		
	},

	addOrder: async (
		title: string,
		category: string,
		person_in: string,
		person_out: string,
		sum: string
	) => {
		return api.post('/order', {
			title,
			category,
			person_in,
			person_out,
			sum
		}).then(res => res.data)
	},

	editOrder: async (
		title: string,
		category: string,
		person_in: string,
		person_out: string,
		sum: string,
		id: number
	) => {
		return api.patch(`/order/${id}`,{
			title,
			category,
			person_in,
			person_out,
			sum
		})
			.then(res => res.data)
	},

	delOrder: async (id: string,) => {
		return api.delete(`/order/${id}`)
			.then(res => res.data)
	},
}