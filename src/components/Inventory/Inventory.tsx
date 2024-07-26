import { useEffect, useState } from "react";
import { useClinicStore } from "../../store/clinic";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { IState } from "../../types/users.types";
import { Filter } from "../Filter/Filter";
import { InventoryList } from "../InventoryList/InventoryList";

export const Inventory = () => {
    const clinicActiveId = useClinicStore((state) => state.activeId);
    const navigate = useNavigate();
    const today = new Date();
    const [state, setState] = useState<IState>({
        tab: 'today',
        filter: {
            from: String(today.setHours(0, 0, 0, 0)), // Начало дня.
            to: String(Math.floor(today.getTime() / 1000))
        },
        user: {
            personal_id: 0,
            name: ''
        }
    });

    useEffect(() => {
        if(clinicActiveId === 0 ) {
            navigate('/');
        }
    }, [])

   return (
       <Layout>
            <Filter setState={setState}/>
            <InventoryList state={state}/>
       </Layout>
   );
};