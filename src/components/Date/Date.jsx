import { useState } from "react"
import './Date.styles.css'

export const Date = ({currentDate, sortDate}) => {

    const [dateForSort,setDate] = useState(currentDate);

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const handleSort = () => {
        sortDate(dateForSort);
    }
    return (
        <div className="date_block">
            <div className="current_date">Today:
            <input className="current_input" type='date' value={currentDate} disabled/>
            </div>
            <div className="sort_block">
            <input className="sort_date" type='date' defaultValue={currentDate} onChange={changeDate} />
            <button className="sort_btn" onClick={handleSort}>Sort by Date</button>
            </div>
            
        </div>
    )
}