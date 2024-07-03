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
	}

}