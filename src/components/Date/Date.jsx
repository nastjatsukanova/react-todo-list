import { useState } from "react";
import { Button } from "../Controls/Button/Button";
import { Input } from "../Controls/Input/Input";
import './Date.styles.css';

export const Date = ({currentDate, sortDate}) => {
    const [dateForSort,setDate] = useState(currentDate);
    const changeDate = (e) => { setDate(e.target.value); }
    const handleSort = () => {
        sortDate(dateForSort);
        setDate(currentDate);
        }
    return (
        <div className="date_block">
            <div className="current_date">Today:
            <Input className={"current_input"} type={'date'} value={currentDate} disabled={true}/>
            </div>
            <div className="sort_block">
            <Input className={"sort_date"} type={"date"} value={dateForSort} handleChange={changeDate} disabled={false} />
            <Button className={"sort_btn"} handleClick={handleSort} text={"Sort by Date"}/>
            </div>
        </div>
    )
}