import { useGetUsers } from '../../hooks/useGetUsers';
import { IUsers } from '../../types/users.types';
import { StatusButton } from '../StatusButton/StatusButton';
import { UsersAdd } from '../UsersAdd/UsersAdd';
import style from './UserResultList.module.scss';

export const UserResultList = () => {
    const {isPending, error, data} = useGetUsers();

    if (isPending) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    if (data && !data?.length) return 'Нет пользователей';


    return (
        <div className={style.main}>
            <div className="title-block">Результат за 01.01.24 - 31.02.24</div>
            <div className="">
                <div className={style.header}>
                    <div className="">ФИО</div>
                    <div className="">Период</div>
                    <div className="">Часов</div>
                    <div className="">Почасовой оклад</div>
                    <div className="">Итого</div>
                </div>
                {data.map((item: IUsers) => (
                    <div className={style.item} key={item.personal_id}>
                        <div className={style.fio}>
                            <div className={style.name}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0013 4.49996L12.0013 6.49996M8.66797 13.8333H14.0013M3.33464 11.1666L2.66797 13.8333L5.33464 13.1666L13.0586 5.44263C13.3086 5.19259 13.449 4.85351 13.449 4.49996C13.449 4.14641 13.3086 3.80733 13.0586 3.55729L12.944 3.44263C12.6939 3.19267 12.3549 3.05225 12.0013 3.05225C11.6477 3.05225 11.3087 3.19267 11.0586 3.44263L3.33464 11.1666Z" stroke="#287EFF" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <UsersAdd btnText={`${item.second_name} ${item.name[0]}. ${item.last_name[0]}.`} btnClassName={style.nameUser}/>
                            </div>
                            <StatusButton status={item.status} personal_id={item.personal_id}/>
                        </div>
                        <div className="">
                            09:00 - 13:00 (4ч.)
                        </div>
                        <div className="">
                            {item.time_format}
                        </div>
                        <div className={style.salary}>
                            {item.coast}
                        </div>
                        <div className="">
                            2 800 р.
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66602 5.16667H13.3327M6.66602 7.83333V11.8333M9.33268 7.83333V11.8333M3.33268 5.16667L3.99935 13.1667C3.99935 13.5203 4.13982 13.8594 4.38987 14.1095C4.63992 14.3595 4.97906 14.5 5.33268 14.5H10.666C11.0196 14.5 11.3588 14.3595 11.6088 14.1095C11.8589 13.8594 11.9993 13.5203 11.9993 13.1667L12.666 5.16667M5.99935 5.16667V3.16667C5.99935 2.98986 6.06959 2.82029 6.19461 2.69526C6.31964 2.57024 6.4892 2.5 6.66602 2.5H9.33268C9.50949 2.5 9.67906 2.57024 9.80409 2.69526C9.92911 2.82029 9.99935 2.98986 9.99935 3.16667V5.16667" stroke="#FF3535" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.buttom}>
                <div className={style.result}>
                    <div>Итого:</div>
                    <div>16 353 р.</div>
                </div>
            </div>
            <div className={style.buttomBtns}>
                <UsersAdd btnText={'Добавить пользователя'}/>
                <button>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4 0.5C15.6711 0.499861 15.9326 0.599807 16.1345 0.780666C16.3364 0.961524 16.4644 1.21056 16.494 1.48L16.5 1.6V4.5H17.5C18.2652 4.49996 19.0015 4.79233 19.5583 5.31728C20.115 5.84224 20.4501 6.56011 20.495 7.324L20.5 7.5V14.5C20.5002 15.0046 20.3096 15.4906 19.9665 15.8605C19.6234 16.2305 19.1532 16.4572 18.65 16.495L18.5 16.5H16.5V18.4C16.5001 18.6711 16.4002 18.9326 16.2193 19.1345C16.0385 19.3364 15.7894 19.4644 15.52 19.494L15.4 19.5H5.6C5.32894 19.5001 5.06738 19.4002 4.86548 19.2193C4.66358 19.0385 4.53557 18.7894 4.506 18.52L4.5 18.4V16.5H2.5C1.99542 16.5002 1.50943 16.3096 1.13945 15.9665C0.769471 15.6234 0.542843 15.1532 0.505 14.65L0.5 14.5V7.5C0.499957 6.73479 0.792325 5.99849 1.31728 5.44174C1.84224 4.88499 2.56011 4.54989 3.324 4.505L3.5 4.5H4.5V1.6C4.49986 1.32894 4.59981 1.06738 4.78067 0.865479C4.96152 0.663582 5.21056 0.53557 5.48 0.506L5.6 0.5H15.4ZM14.5 13.5H6.5V17.5H14.5V13.5ZM17.5 6.5H3.5C3.25507 6.50003 3.01866 6.58996 2.83563 6.75272C2.65259 6.91547 2.53566 7.13975 2.507 7.383L2.5 7.5V14.5H4.5V12.6C4.49986 12.3289 4.59981 12.0674 4.78067 11.8655C4.96152 11.6636 5.21056 11.5356 5.48 11.506L5.6 11.5H15.4C15.6711 11.4999 15.9326 11.5998 16.1345 11.7807C16.3364 11.9615 16.4644 12.2106 16.494 12.48L16.5 12.6V14.5H18.5V7.5C18.5 7.23478 18.3946 6.98043 18.2071 6.79289C18.0196 6.60536 17.7652 6.5 17.5 6.5ZM15.5 7.5C15.7549 7.50028 16 7.59788 16.1854 7.77285C16.3707 7.94782 16.4822 8.18695 16.4972 8.44139C16.5121 8.69584 16.4293 8.94638 16.2657 9.14183C16.1021 9.33729 15.8701 9.4629 15.617 9.493L15.5 9.5H13.5C13.2451 9.49972 13 9.40212 12.8146 9.22715C12.6293 9.05218 12.5178 8.81305 12.5028 8.55861C12.4879 8.30416 12.5707 8.05362 12.7343 7.85817C12.8979 7.66271 13.1299 7.5371 13.383 7.507L13.5 7.5H15.5ZM14.5 2.5H6.5V4.5H14.5V2.5Z" fill="white" />
                    </svg>
                    Печать
                </button>
            </div>
        </div>
    )

}