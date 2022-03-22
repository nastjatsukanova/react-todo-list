import './Input.styles.css'

export const Input = (props) => {
    return (
        <input className="input" onChange={props.handleChange} value={props.value}/>
    )
}