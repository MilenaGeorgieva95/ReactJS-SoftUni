export default function MovieItem(props){
    return (
        <article>
            <header>
                <h4>{props.movie.title}</h4>
            </header>
            <main>
                <p>{props.movie.plot}</p>
                <img src={props.movie.posterUrl} alt={props.movie.title} />
            </main>
            <footer>
                <p><strong>Dirtector: {props.movie.director}</strong></p>
                <p>Year: {props.movie.year}</p>
            </footer>
        </article>
    )
}