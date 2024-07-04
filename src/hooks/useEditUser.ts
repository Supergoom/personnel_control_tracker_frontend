import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersService } from "../services/users.service";
import { toast } from "react-toastify";

export const useEditUser = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (
            data: {
                name: string,
                second_name: string,
                last_name: string,
                coast: string,
                personal_id: number
            }
        ) => UsersService.editUser(data.name, data.second_name, data.last_name, data.coast, data.personal_id),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']});
            toast('Сотрудник изменен');
        }
    });
}