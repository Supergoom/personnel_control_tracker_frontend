import { useEffect, useState } from "react";

const DarkModeConstant = {
	DARK: 'dark',
    LIGHT: 'light',
    LOCAL_NAME: 'data-theme'
} as const

export const DarkMode = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem(DarkModeConstant.LOCAL_NAME);
        
        if(theme === DarkModeConstant.DARK) {
            setToggleDarkMode(true);
            document.querySelector('body')?.setAttribute(
                DarkModeConstant.LOCAL_NAME,
                DarkModeConstant.DARK
            );
            return;
        }

        setToggleDarkMode(false);
        return;
    }, [])

    const toggleDarkTheme = () => {
        document.querySelector('body')?.setAttribute(
            DarkModeConstant.LOCAL_NAME,
            toggleDarkMode ? DarkModeConstant.LIGHT : DarkModeConstant.DARK
        );

        localStorage.setItem(
            DarkModeConstant.LOCAL_NAME,
            toggleDarkMode ? DarkModeConstant.LIGHT : DarkModeConstant.DARK
        );

        setToggleDarkMode(!toggleDarkMode);
    };

    return (
        <div onClick={toggleDarkTheme}>
            Тема: {toggleDarkMode ? 'Темная тема' : 'Светлая'}
        </div>
    )
}

