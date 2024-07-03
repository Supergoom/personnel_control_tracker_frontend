import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersService } from "../services/users.service";

export const useDeleteUser = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (data: {personal_id: number }) => UsersService.delUser(data.personal_id),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']})
        }
    });
}