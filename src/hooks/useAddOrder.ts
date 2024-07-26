import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";
import { OrdersService } from "../services/orders.service";

export const useAddOrder = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (
            data: {
                title: string;
                category: string;
                person_in: string;
                person_out: string;
                sum: string;
            }               
                
        ) => OrdersService.addOrder(data.title, data.category, data.person_in, data.person_out, data.sum),
        onSuccess: () => {
            client.invalidateQueries({queryKey: ['users']});
            toast('Сотрудник создан');
        }
    });
}