import { DarkMode } from '../DarkMode/DarkMode';
import { Filter } from '../Filter/Filter'
import { UserResultList } from '../UserResultList/UserResultList';
import style from './App.module.scss'
  
function App() {
    return (
        <div className={style.main}>
            <DarkMode />
            <div className={style.container}>
                <Filter />
                <UserResultList />
            </div>
        </div>
    )
}
  
export default App;
  
