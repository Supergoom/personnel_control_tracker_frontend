import { useQuery } from "@tanstack/react-query"
import { UsersService } from "../services/users.service"
import { IState } from "../types/users.types"

export const useGetUsers = ({tab, filter} : IState) => {
	if(tab === 'filter')
		return useQuery({
			queryKey: [`filter`, filter],
			queryFn: () => UsersService.filterDateUsers(filter.from, filter.to),
			select: data => data,
			refetchInterval: 0.5 * 60 * 1000,
	})

	return useQuery({
		queryKey: [`users`],
		queryFn: () => UsersService.getUsers(),
		select: data => data.data,
		refetchInterval: 0.5 * 60 * 1000,
	})
}