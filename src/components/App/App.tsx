import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkMode } from '../DarkMode/DarkMode';
import { Filter } from '../Filter/Filter'
import { UserResultList } from '../UserResultList/UserResultList';
import style from './App.module.scss';
import { useState } from 'react';
import { IState } from '../../types/users.types';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

function App() {
    const today = new Date();
    const [state, setState] = useState<IState>({
        tab: 'today',
        filter: {
            from: String(today.setHours(0, 0, 0, 0)), // Начало дня.
            to: String(Math.floor(today.getTime() / 1000))
        },
        userId: null
    });

    console.log('state', state);

    return (
        <QueryClientProvider client={queryClient}>
            <div className={style.main}>
                <DarkMode />
                <div className={style.container}>
                    <Filter setState={setState}/>
                    <UserResultList state={state}/>
                </div>
            </div>
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
  
export default App;
  
