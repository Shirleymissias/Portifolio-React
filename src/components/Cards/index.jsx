import "./styles.css"

export default function CardService ({src, descpription,title,text}) {
    return(
        <>
            <div className="card">
               <img src={src} alt={descpription} />
               <h2>{title}</h2>
               <p>{text}</p>
            </div>
        </>
    )
}