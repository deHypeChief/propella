import './style.css'
export default function Button(props){
    const {children} = props

    return (
        <button onSubmit={props.submit} onClick={props.action} className={props.className}>
            {children}
        </button>
    )
}