import './Button.styles.css'

export const Button = ({saveTodo,text,className}) => {
    return (
        <button className={className} onClick={saveTodo}>{text}</button>
    )
}