import { MouseEvent, ReactNode } from "react"

type Button = {
    children: ReactNode;
    color?: 'blue' | 'red' | 'white';
    className?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const Button = ({children, color, className, onClick} : Button) => {
    return (
        <button className={`${color || 'blue'} ${className}`} onClick={(e) => onClick && onClick(e)}>
            {children}
        </button>
    );
}