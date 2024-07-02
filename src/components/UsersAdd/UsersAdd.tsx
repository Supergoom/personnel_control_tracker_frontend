import { FormEvent, useState } from "react";
import Modal from 'react-modal';
import { UsersService } from "../../services/users.service";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    btnText: string;
    btnClassName?: string;
}

export const UsersAdd = ({btnText, btnClassName}: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        overlay: {zIndex: 1000}
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.currentTarget;

        toast.promise(
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
                <h2>Новый сотрудник</h2>
                <button onClick={closeModal}>Закрыть</button>
                <form onSubmit={submit}>
                    <input type="text" name="second_name" placeholder="Фамилия" />
                    <input type="text" name="user_name" placeholder="Имя" />
                    <input type="text" name="last_name" placeholder="Отчество" />
                    <input type="text" name="coast" placeholder="Ставка в час" />
                    <input type="submit" />
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