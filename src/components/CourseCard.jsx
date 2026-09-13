export default function CourseCard({title , description ,duration, onSelect ,onfavourite}){
    return (
        <div className = "card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Duration : {duration}Days</p>

            <button onClick={() => onSelect(title)}>Select</button>

            <button onClick={() => onfavourite(title)}>Add Favourite</button>

        </div>
    )
}