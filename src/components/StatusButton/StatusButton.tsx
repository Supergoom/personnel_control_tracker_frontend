import { useCreateStatusUser } from "../../hooks/useCreateStatusUser";
import { IStatusEnum, IStatusUser } from "../../types/users.types";
import styles from "./StatusButton.module.scss";

export const StatusButton = ({personal_id, status}: IStatusUser) => {
    const {mutate: mutateCreateStatusUser} = useCreateStatusUser();

    const clickStatus = (status: IStatusEnum) => {
        mutateCreateStatusUser({personal_id, status});
    }

    if (status === 'off') {
        return <button className={styles.btn}
                    onClick={() => clickStatus(IStatusEnum.START)}
                >
                    Cтарт
                </button>
    }

    if (status === 'pause') {
        return (
            <div className={styles.wrapper}>
                <button className={`${styles.btn} ${styles.stop}`}
                    onClick={() => clickStatus(IStatusEnum.STOP)}
                >
                    Cтоп
                </button>
                <div className={styles.playPauseBtn}
                    onClick={() => clickStatus(IStatusEnum.PAUSE_END)}
                >
                    <PlayIcons />
                </div>
            </div>
        )
    }

    if (status === 'start') {
        return (
            <div className={styles.wrapper}>
                <button className={`${styles.btn} ${styles.stop}`}
                    onClick={() => clickStatus(IStatusEnum.STOP)}
                >
                    Стоп
                </button>
                <div className={styles.playPauseBtn}
                    onClick={() => clickStatus(IStatusEnum.PAUSE_START)}
                >
                    <PauseIcons />
                </div>
            </div>
        )
    }

    if (status === 'stop') {
        return <button className={`${styles.btn} ${styles.disabled}`}>Cтарт</button>
    }
}

export const PlayIcons = () => (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0109 5.75873C13.3453 6.52676 13.3478 8.45126 12.0155 9.22283L3.02241 14.4309C1.69009 15.2024 0.022154 14.2424 0.0201172 12.7028L0.00636866 2.31051C0.00433185 0.770906 1.66972 -0.19355 3.00407 0.574485L12.0109 5.75873Z" fill="#35E046" />
    </svg>
)

export const PauseIcons = () => (
    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="6" height="18" rx="3" fill="#FF3535" />
        <rect x="10" y="0.5" width="6" height="18" rx="3" fill="#FF3535" />
    </svg>
)