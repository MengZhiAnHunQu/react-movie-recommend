import { Container } from "react-bootstrap";
import "./App.css";
import { CutstomCard } from "./customCard/CutstomCard";
import { MovieList } from "./movieList/MovieList";
import { SearchForm } from "./searchForm/SearchForm";
import { Title } from "./title/Title";
import { fetchMovie } from "./helper/AxiosHelper";
import { useState, useEffect } from "react";
import { randomChar } from "./helper/randomGeneratorHelper";

function App() {
  const [searchMovie, setSearchMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    //create random character
    const char = randomChar();
    getMovie(char);
  }, []); //[]it will only trigger for the first time

  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    console.log(data);
    setSearchMovie(data);
  };

  const addToMovieList = (type) => {
    setMovieList([...movieList, { ...searchMovie, cat: type }]);
    setSearchMovie("");

    //make the top card disapper after we click the button
  };

  const deleteMovie = (imdbID) => {
    if (window.confirm("delete?")) {
      const filteredMovieList = movieList.filter(
        (movie) => movie.imdbID !== imdbID
      );
      setMovieList(filteredMovieList);
    }
  };

  console.log(movieList);

  console.log("222");
  return (
    <div className="wrapper">
      {/* <TopNav /> */}
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />

        {searchMovie.imdbID && (
          <CutstomCard movieObj={searchMovie} func={addToMovieList} />
        )}

        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;
