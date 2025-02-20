import MovieItem from "./MovieItem";

export default function MovieList(props) {
  return (
    <>
      <h3>Movie List:</h3>
      <div>
        <MovieItem movie={props.movies[0]}/>
        <MovieItem movie={props.movies[1]}/>
        <MovieItem movie={props.movies[2]}/>
        <MovieItem movie={props.movies[3]}/>
        <MovieItem movie={props.movies[4]}/>
      </div>
    </>
  );
}
