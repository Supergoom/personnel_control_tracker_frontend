import { ReactNode, useRef } from 'react'
import style from './Dropdown.module.scss'
import { useClickOutside } from '../../hooks/useClickOutside';

interface DropdownProps {
	children?: ReactNode;
    showDropdown: boolean;
    button?: ReactNode;
	setShowDropdown: (value: boolean) => void;
    direction?: DropdownDirection;
    styles?: string;
}

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': style.optionsBottomLeft,
    'bottom right': style.optionsBottomRight,
    'top right': style.optionsTopRight,
    'top left': style.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
	const { 
        children, showDropdown, button, setShowDropdown, direction = 'bottom left', styles
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    const clickRef = useRef(null);
    
    useClickOutside(clickRef, () => {
        setShowDropdown(false)
    })

	return (
		<>
            <div ref={clickRef} className={`${style.dropdown} ${styles}`}>
                {button}
                {showDropdown && 
                    <div className={showDropdown ? `${style.dropdownSection} ${menuClasses} active` : `${style.dropdownSection} ${menuClasses}`} >
                        {children}
                    </div>
                }
            </div>
		</>
	)
}
