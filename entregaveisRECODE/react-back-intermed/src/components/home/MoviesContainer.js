import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesContainer = (props) => {
  const { movies } = props;
  let content = "";
  if (movies === undefined) {
    console.log("Não foi possível achar o filme");
  } else {
    content = movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ));
    console.log(content);
  }
  return <div className="row">{content}</div>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);