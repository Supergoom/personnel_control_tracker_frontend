import { useState } from 'react';
import { Button } from '../ui/Button/Button'
import style from './Filter.module.scss'

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
// import { addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useFilterDate } from '../../hooks/useFilterDate';

export const Filter = () => {
    const initialRange: DateRange = {
        from: new Date(),
        to: undefined// to: addDays(new Date(), 4)
    };

    const [range, setRange] = useState<DateRange | undefined>(initialRange);
    const {mutate: mutateFilterDate} = useFilterDate();

    const onSelectCalerdar = (selected:DateRange | undefined) => {
        setRange(selected);
        const from = Math.floor(new Date(String(selected?.from)).getTime() / 1000);
        const to = Math.floor(new Date(String(selected?.to)).getTime() / 1000);

        mutateFilterDate({
            from: from,
            to: to
        });
    }

    return (
        <div>
            <div className="title-block">Фильтр</div>
            <div className={style.main}>
                <Button className="rounded-r-none">Год</Button>
                <Button className="rounded-none active">Месяц</Button>
                <Button className="rounded-none">Неделя</Button>
                <Button className="rounded-l-none">День</Button>
            </div>

            <div className={style.mapContainer}>
                <div className="title-block">Выбрать период</div>
                <DayPicker 
                    mode="range"
                    selected={range}
                    onSelect={(selected) => onSelectCalerdar(selected)}
                    locale={ru}
                    // disabled={}
                    className={style.map}
                />
            </div>
        </div>
    )
}