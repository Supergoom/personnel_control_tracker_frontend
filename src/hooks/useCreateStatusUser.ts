import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersService } from "../services/users.service";

export const useCreateStatusUser = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (data: {personal_id: number, status: string }) => UsersService.editStatusUser(data.personal_id, data.status),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']})
        }
    });
}