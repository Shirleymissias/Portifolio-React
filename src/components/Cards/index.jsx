import "./styles.css"

export default function CardService ({poster, descpription,title,text}) {
    return(
        <>
            <div className="card">
               <img src={poster} alt={descpription} />
               <h1>{title}</h1>
               <p>{text}</p>
            </div>
        </>
    )
}