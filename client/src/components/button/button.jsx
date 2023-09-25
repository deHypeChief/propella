import './style.css'
export default function Button(props){
    const {children} = props

    return (
        <button className={props.className}>
            {children}
        </button>
    )
}