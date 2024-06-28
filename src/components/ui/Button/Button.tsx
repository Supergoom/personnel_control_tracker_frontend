import { ReactNode } from "react"

type Button = {
    children: ReactNode;
    color?: 'blue' | 'red' | 'white';
    className?: string;
}

export const Button = ({children, color, className} : Button) => {
    return (
        <button className={`${color || 'blue'} ${className}`}>
            {children}
        </button>
    );
}