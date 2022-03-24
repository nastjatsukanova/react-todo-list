import './Button.styles.css'

export const Button = ({handleClick,text,className}) => {
    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}