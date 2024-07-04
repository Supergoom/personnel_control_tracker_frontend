import { FormEvent, ReactNode, useState } from "react";
import Modal from 'react-modal';
import { UsersService } from "../../services/users.service";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    btnText: ReactNode;
    btnClassName?: string;
    titlePopup: string;
    value?: {
        name: string;
        last_name: string;
        second_name: string;
        coast: string;
        personal_id: number;
    }
}

export const UsersAddEdit = ({btnText, btnClassName, value, titlePopup}: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        overlay: {
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0, .7)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px 50px 40px'
          },
        
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.currentTarget;

        if(!!value) {
            return toast.promise(
                UsersService.editUser(
                    target.user_name.value,
                    target.second_name.value,
                    target.last_name.value,
                    target.coast.value,
                    value.personal_id
                ),
                {
                  pending: 'Изменен пользователя',
                  success: 'Пользователь изменен 👌',
                  error: 'Пользователь не изменен 🤯'
                }
            )
        }

        return toast.promise(
            UsersService.addUser(
                target.user_name.value,
                target.second_name.value,
                target.last_name.value,
                target.coast.value
            ),
            {
              pending: 'Создаем пользователя',
              success: 'Пользователь создан 👌',
              error: 'Пользователь не создан 🤯'
            }
        )
    }

    return (
        <div>
            <button onClick={openModal} className={btnClassName}>{btnText}</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>{titlePopup}</h2>
                <div onClick={closeModal} style={{
                    position: 'absolute',
                    right: '20px',
                    top: '15px',
                    cursor: 'pointer'

                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
                <form onSubmit={submit}>
                    <input defaultValue={value && value.second_name || ''} type="text" name="second_name" placeholder="Фамилия" />
                    <input defaultValue={value && value.name || ''} type="text" name="user_name" placeholder="Имя" />
                    <input defaultValue={value && value.coast || ''} type="text" name="last_name" placeholder="Отчество" />
                    <input defaultValue={value && value.coast || ''} type="text" name="coast" placeholder="Ставка в час" />
                    <input type="submit" className="btn"/>
                </form>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
        </div>
    )
}