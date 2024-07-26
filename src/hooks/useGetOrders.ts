import { useQuery } from "@tanstack/react-query"
// import { UsersService } from "../services/users.service"
// import { IState } from "../types/users.types"
import { useClinicStore } from "../store/clinic";
import { OrdersService } from "../services/orders.service";

export const useGetOrders = () => {
	const clinicActiveId = useClinicStore((state) => state.activeId);

	// if(tab === 'filter')
	// 	return useQuery({
	// 		queryKey: [`filter_${clinicActiveId}`, filter],
	// 		queryFn: () => UsersService.filterDateUsers(filter.from, filter.to),
	// 		select: data => data,
	// 		refetchInterval: 0.5 * 60 * 1000,
	// 	})

	return useQuery({
		queryKey: [`order_${clinicActiveId}`],
		queryFn: () => OrdersService.getOrders(),
		refetchInterval: 0.5 * 60 * 1000,
	})
}