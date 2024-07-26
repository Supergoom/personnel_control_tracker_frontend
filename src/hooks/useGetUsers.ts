import { useQuery } from "@tanstack/react-query"
import { UsersService } from "../services/users.service"
import { IState } from "../types/users.types"
import { useClinicStore } from "../store/clinic";

export const useGetUsers = ({tab, filter, user} : IState) => {
	const clinicActiveId = useClinicStore((state) => state.activeId);

	if(tab === 'filter')
		return useQuery({
			queryKey: [`filter_${clinicActiveId}`, filter],
			queryFn: () => UsersService.filterDateUsers(filter.from, filter.to),
			select: data => data,
			refetchInterval: 0.5 * 60 * 1000,
		})

	if(tab === 'user')
		return useQuery({
			queryKey: [`user_${clinicActiveId}`, user.personal_id],
			queryFn: () => UsersService.getUserById(user.personal_id),
			select: data => data,
			refetchInterval: 0.5 * 60 * 1000,
		})

	return useQuery({
		queryKey: [`users_${clinicActiveId}`],
		queryFn: () => UsersService.getUsers(),
		select: data => data.data,
		refetchInterval: 0.5 * 60 * 1000,
	})
}