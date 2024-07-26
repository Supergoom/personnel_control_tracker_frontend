// import { DarkMode } from '../DarkMode/DarkMode';
import { Filter } from '../Filter/Filter'
import { UserResultList } from '../UserResultList/UserResultList';
import style from './App.module.scss';
import { useEffect, useState } from 'react';
import { IState } from '../../types/users.types';
import { useClinicStore } from '../../store/clinic';
import { Layout } from '../Layout/Layout';

function App() {
    const today = new Date();
    const setActiveClinicId = useClinicStore((state) => state.setActiveId);
    const clinicActiveId = useClinicStore((state) => state.activeId);
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
        console.log('clinicActiveId', clinicActiveId);
    }, [])

    const clinics = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        }
    ]

    if(clinicActiveId === 0) {
        return (
            <div>
                <h1 className={style.clinicTitle}>Выбирите клинику</h1>
                <div className={style.clinicBtns}>
                    {clinics.map((item)=> (
                        <button key={item.id} onClick={() => setActiveClinicId(item.id)}>Клиника {item.id}</button>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <Filter setState={setState}/>
            <UserResultList state={state} setState={setState}/>
        </Layout>
    )
}
  
export default App;
  
