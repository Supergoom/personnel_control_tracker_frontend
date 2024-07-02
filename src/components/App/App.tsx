import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkMode } from '../DarkMode/DarkMode';
import { Filter } from '../Filter/Filter'
import { UserResultList } from '../UserResultList/UserResultList';
import style from './App.module.scss';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={style.main}>
                <DarkMode />
                <div className={style.container}>
                    <Filter />
                    <UserResultList />
                </div>
            </div>
        </QueryClientProvider>
    )
}
  
export default App;
  
