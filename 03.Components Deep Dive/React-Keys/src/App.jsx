import { useState } from "react";
import "./App.css";
import MovieListItem from "./components/movieListItem";

// const movies = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     year: "1988",
//     runtime: "92",
//     genres: ["Comedy", "Fantasy"],
//     director: "Tim Burton",
//     actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
//     plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
//     posterUrl:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
//   },
//   {
//     id: 2,
//     title: "The Cotton Club",
//     year: "1984",
//     runtime: "127",
//     genres: ["Crime", "Drama", "Music"],
//     director: "Francis Ford Coppola",
//     actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
//     plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
//     posterUrl:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
//   },
//   {
//     id: 3,
//     title: "The Shawshank Redemption",
//     year: "1994",
//     runtime: "142",
//     genres: ["Crime", "Drama"],
//     director: "Frank Darabont",
//     actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
//     plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//     posterUrl:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
//   },
//   {
//     id: 4,
//     title: "Crocodile Dundee",
//     year: "1986",
//     runtime: "97",
//     genres: ["Adventure", "Comedy"],
//     director: "Peter Faiman",
//     actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
//     plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
//     posterUrl:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
//   },
//   {
//     id: 5,
//     title: "Valkyrie",
//     year: "2008",
//     runtime: "121",
//     genres: ["Drama", "History", "Thriller"],
//     director: "Bryan Singer",
//     actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
//     plot: "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
//     posterUrl:
//       "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg",
//   },
// ];

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "The Matrix" },
    { id: 2, title: "Man of Steel" },
    { id: 3, title: "The Case for Christ" },
    { id: 4, title: "Lord of the Rings" },
  ]);

  const removeFirsthandler = function () {
    //! Bad practise
    //! movies.shift();
    //! setMovies(movies);

    //* Shallow copy of the array
    //* setMovies([...movies]);

    //* slice returns shallow copy of the array
    setMovies(movies.slice(1));
  };

  // * the keys should be unique among siblings(map/ul ctxs)
  // * the keys should be unchanged between renders
  // * the key goes in the map function

  return (
    <>
      <h2>Movie List:</h2>
      <ul>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
      <button onClick={removeFirsthandler}>Remove First</button>
    </>
  );
}

export default App;
