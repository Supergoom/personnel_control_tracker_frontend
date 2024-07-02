import { useQuery } from "@tanstack/react-query"
import { UsersService } from "../services/users.service"

export const useGetUsers = () => {
    return useQuery({
		queryKey: [`users`],
		queryFn: () => UsersService.getUsers(),
        select: data => data.data
	})
}