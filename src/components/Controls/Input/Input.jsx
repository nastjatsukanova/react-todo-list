import './Input.styles.css'

export const Input = ({value, handleChange, id, disabled, type, defaultChecked, className, onClick}) => {
    return (
        <input className={className} onClick={onClick} onChange={handleChange} value={value} id={id} disabled={disabled} type={type} defaultChecked={defaultChecked} />
    )
}