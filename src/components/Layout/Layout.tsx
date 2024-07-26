import { ReactNode } from "react";
import style from './Layout.module.scss';

export const Layout = ({children}: {children: ReactNode}) => {
   return (
    <div className={style.main}>
        {/* <DarkMode /> */}
        <div className={style.container}>
            {children}
        </div>
    </div>
   );
};