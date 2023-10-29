import loadImg from '../../assets/icons/propella Star.svg'

export default function Loading(){
    return(
        <>
            <div className="loading">
                <img src={loadImg} alt="" />
            </div>
        </>
    )
}