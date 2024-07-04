import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersService } from "../services/users.service";
import { toast } from "react-toastify";

export const useAddUser = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (
            data: {
                name: number,
                second_name: string,
                last_name: string,
                coast: string
            }               
                
        ) => UsersService.addUser(data.name, data.second_name, data.last_name, data.coast),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']});
            toast('Сотрудник создан');
        }
    });
}