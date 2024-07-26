import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";
import { OrdersService } from "../services/orders.service";
import { useClinicStore } from "../store/clinic";

export const useEditOrder = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (
            data: {
                title: string;
                category: string;
                person_in: string;
                person_out: string;
                sum: string;
                id: number
            }
        ) => OrdersService.editOrder(data.title, data.category, data.person_in, data.person_out, data.sum, data.id),
        onSuccess: () => {
            client.invalidateQueries({queryKey: [`order_${useClinicStore.getState().activeId}`]});
            toast('Инвентаризация изменена');
        }
    });
}