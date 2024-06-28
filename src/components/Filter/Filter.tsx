import { useState } from 'react';
import { Button } from '../ui/Button/Button'
import style from './Filter.module.scss'

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

export const Filter = () => {
    const initialRange: DateRange = {
        from: new Date(),
        to: addDays(new Date(), 4)
    };

    const [range, setRange] = useState<DateRange | undefined>(initialRange);

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
                    onSelect={setRange}
                    locale={ru}
                    dir="rtl"
                    className={style.map}
                />
            </div>
        </div>
    )
}