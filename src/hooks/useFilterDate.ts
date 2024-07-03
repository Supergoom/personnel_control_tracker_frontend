import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersService } from "../services/users.service";

export const useFilterDate = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (data: {from:number, to:number}) => UsersService.filterDateUsers(data),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']})
        }
    });
}