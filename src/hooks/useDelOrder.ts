import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useClinicStore } from "../store/clinic";
import { OrdersService } from "../services/orders.service";

export const useDeleteOrder = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (data: {id: string }) => OrdersService.delOrder(data.id),
        onSuccess: () => {
            client.invalidateQueries({queryKey: [`order_${useClinicStore.getState().activeId}`]})
        }
    });
}