import { MouseEvent, useState } from 'react';
import style from './Filter.module.scss'

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
// import { addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Button } from '../ui/Button/Button';
import { startOfMonth, startOfWeek, startOfYear } from 'date-fns';

export const Filter = ({setState}: any) => {
    const today = new Date();
    const initialRange: DateRange = {
        from: today,
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

    const todayClick = (event: MouseEvent<HTMLElement>) => {
        toggleClassActive((event.target as Element));
        
        setRange({ from: today, to: undefined });
        setState('today');
        setState({
            tab: 'today',
            filter: {
                from: today,
                to: undefined
            }
        });

    }

    const weekClick = (event: MouseEvent<HTMLElement>) => {
        const currentDate = startOfWeek(today);
        currentDate.setDate(currentDate.getDate() + 1);
        toggleClassActive((event.target as Element));

        setRange({ from: currentDate, to: today });
        setState({
            tab: 'filter',
            filter: {
                from: currentDate,
                to: today
            }
        });
    }

    const monthClick = (event: MouseEvent<HTMLElement>) => {
        toggleClassActive((event.target as Element));

        setRange({ from: startOfMonth(today), to: today });
        setState({
            tab: 'filter',
            filter: {
                from: startOfMonth(today),
                to: today
            }
        });
    }

   

    const yearClick = (event: MouseEvent<HTMLElement>) => {
        toggleClassActive((event.target as Element));

        setRange({ from: startOfYear(today), to: today });
        setState({
            tab: 'filter',
            filter: {
                from: startOfMonth(today),
                to: today
            }
        });
    }

    const toggleClassActive = (target: any) => {
        const btns = document.querySelectorAll('.filter-btn');
        btns.forEach((item) => item.classList.remove('active'));
        target.classList.add("active");
    }
 
    return (
        <div>
            {/* <div className="title-block">Фильтр</div> */}
            <div className={style.main}>
                <Button className="filter-btn rounded-r-none" onClick={yearClick}>Год</Button>
                <Button className="filter-btn rounded-none" onClick={monthClick}>Месяц</Button>
                <Button className="filter-btn rounded-none" onClick={weekClick}>Неделя</Button>
                <Button className="filter-btn rounded-l-none active" onClick={todayClick}>Сегодня</Button>
            </div>

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
                            {range.from && range.from.toLocaleDateString()}
                            {range.to && ' — ' + range.to.toLocaleDateString()}
                          </p>
                        )
                      }
                />
            </div>
        </div>
    )
}