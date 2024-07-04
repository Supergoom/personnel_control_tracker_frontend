import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersService } from "../services/users.service";

export const useFilterDate = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: ({from, to}: {from:string, to:string}) => UsersService.filterDateUsers(from, to),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']})
        }
    });
}