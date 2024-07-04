import api from "./api"

export const UsersService = {
    getUsers: async () => {
		return api.get('/work').then(res => res.data)		
	},

	editStatusUser: async (personal_id: number, status: string) => {
		return api.post('/work', {
			personal_id,
			status,
		}).then(res => res.data)
	},

	addUser: async (name: number, second_name: string, last_name: string, coast: string) => {
		return api.post('/personals', {
			name,
			second_name,
			last_name,
			coast
		}).then(res => res.data)
	},

	delUser: async (personal_id: number,) => {
		return api.delete(`personals/${personal_id}`)
			.then(res => res.data)
	},

	filterDateUsers: async (from: string, to: string) => {
		return api.get(`/work/filter?start_timestamp=${from}&end_timestamp=${to}`)
			.then(res => res.data)
	},

	editUser: async (name: string, second_name: string, last_name: string, coast: string, personal_id: number) => {
		return api.patch(`/personals/${personal_id}`,{
			name,
			second_name,
			last_name,
			coast
		})
			.then(res => res.data)
	},
}