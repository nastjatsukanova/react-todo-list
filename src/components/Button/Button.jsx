import './Button.styles.css'

export const Button = ({handleClick}) => {

    const saveTodo = () => {
        handleClick();
    }
    return (
        <button className="button" onClick={saveTodo}>Save</button>
    )
}