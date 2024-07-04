import { useState } from 'react';
import { Button } from '../ui/Button/Button'
import style from './Filter.module.scss'

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
// import { addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

export const Filter = ({setState}: any) => {
    const initialRange: DateRange = {
        from: undefined,
        to: undefined// to: addDays(new Date(), 4)
    };

    const [range, setRange] = useState<DateRange | undefined>(initialRange);

    const onSelectCalerdar = (selected:DateRange | undefined) => {
        setRange(selected);

        if(!selected || !selected.from) return;

        const from = Math.floor(new Date(String(selected.from)).getTime() / 1000);
        const to = !!selected.to ?
            Math.floor(new Date(String(selected.to)).getTime() / 1000)
            : Math.floor(new Date().getTime() / 1000)

        setState({
            tab: 'filter',
            filter: {
                from: from,
                to: to
            }
        });
    }

    const today = new Date();
 
    return (
        <div>
            {/* <div className="title-block">Фильтр</div> */}
            {/* <div className={style.main}>
                <Button className="rounded-r-none">Год</Button>
                <Button className="rounded-none active">Месяц</Button>
                <Button className="rounded-none">Неделя</Button>
                <Button className="rounded-l-none">Сегодня</Button>
            </div> */}

            <div className={style.mapContainer}>
                <div className="title-block">Выбрать период</div>
                <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={(selected) => onSelectCalerdar(selected)}
                    locale={ru}
                    captionLayout="dropdown" fromYear={2024} toYear={2034}
                    className={style.map}
                    disabled={{ after: today }}
                    footer={
                        range && (
                          <p>
                            {range.from && range.from.toLocaleDateString() + ' —'}
                            {range.to && range.to.toLocaleDateString()}
                          </p>
                        )
                      }
                />
                <button onClick={() => setRange({from: today})}>Go to Today</button>
            </div>
        </div>
    )
}