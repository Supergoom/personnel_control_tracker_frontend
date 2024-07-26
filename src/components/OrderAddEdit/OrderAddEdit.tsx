import { FormEvent, ReactNode, useState } from "react";
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import { IOrders } from "../../types/orders.types";
import { useAddOrder } from "../../hooks/useAddOrder";
import { useEditOrder } from "../../hooks/useEditOrder";

type Props = {
    btnText: ReactNode;
    btnClassName?: string;
    titlePopup: string;
    value?: IOrders
}


export const OrderAddEdit = ({btnText, btnClassName, value, titlePopup}: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const {mutate: mutateAddUser} = useAddOrder();
    const {mutate: mutateEditUser} = useEditOrder();

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
        }
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.currentTarget;

        closeModal();

        if(!!value) {
            return mutateEditUser({
                title: target.titles.value,
                category: target.category.value,
                person_in: target.person_in.value,
                person_out: target.person_out.value,
                sum: target.sum.value,
                id: Number(value.id)
            })
        }
        return mutateAddUser({
            title: target.titles.value,
            category: target.category.value,
            person_in: target.person_in.value,
            person_out: target.person_out.value,
            sum: target.sum.value,
        })
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
                <form onSubmit={submit}>
                    <input defaultValue={value && value.title || ''} type="text" name="titles" placeholder="Наименование" />
                    <input defaultValue={value && value.category || ''} type="text" name="category" placeholder="Категория" />
                    <input defaultValue={value && value.person_in || ''} type="text" name="person_in" placeholder="Заказчик" />
                    <input defaultValue={value && value.person_out || ''} type="text" name="person_out" placeholder="Выдал" />
                    <input defaultValue={value && value.sum || ''} type="text" name="sum" placeholder="Итого" />
                    <input type="submit" className="btn" />
                </form>
            </Modal>
        </div>
    )
}