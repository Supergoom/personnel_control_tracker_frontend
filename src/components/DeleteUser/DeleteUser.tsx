import { useState } from "react";
import { useDeleteUser } from "../../hooks/useDelUser";
import { IUserId } from "../../types/users.types";
import { Dropdown } from "../Dropdown/Dropdown";
import styles from "./DeleteUser.module.scss";

export const DeleteUser = ({personal_id}: IUserId) => {
    const {mutate: mutateDeleteUser} = useDeleteUser();
    const [showDropdown, setShowDropdown] = useState(false);

    const onClickDelUser = () => {
        mutateDeleteUser({personal_id});
    }

    return(
        <Dropdown
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown} 
            direction={'bottom left'}
            // styles={style.select}
            button={
                <div className={styles.btn} onClick={() => setShowDropdown(true)}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66602 5.16667H13.3327M6.66602 7.83333V11.8333M9.33268 7.83333V11.8333M3.33268 5.16667L3.99935 13.1667C3.99935 13.5203 4.13982 13.8594 4.38987 14.1095C4.63992 14.3595 4.97906 14.5 5.33268 14.5H10.666C11.0196 14.5 11.3588 14.3595 11.6088 14.1095C11.8589 13.8594 11.9993 13.5203 11.9993 13.1667L12.666 5.16667M5.99935 5.16667V3.16667C5.99935 2.98986 6.06959 2.82029 6.19461 2.69526C6.31964 2.57024 6.4892 2.5 6.66602 2.5H9.33268C9.50949 2.5 9.67906 2.57024 9.80409 2.69526C9.92911 2.82029 9.99935 2.98986 9.99935 3.16667V5.16667" stroke="#FF3535" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            }
        >
            <div className={styles.dropdown}>
                <p>Удалить сотрудника?</p>
                <div className={styles.btns}>
                    <button 
                        className={'bg-blue'}
                        onClick={() => onClickDelUser()}
                    >
                        Удалить
                    </button>
                    <button onClick={() => setShowDropdown(false)}>Отменить</button>
                </div>
            </div>
        </Dropdown>
    )
} 