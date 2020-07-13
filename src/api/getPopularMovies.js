const getPopularMovies = async () => {
  const apiKey = process.env.REACT_APP_MY_API_KEY;
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const sortLangPages = "&language=en-US&page=1";
  const popular = "popular?api_key=";
  const popularMoviesFetchString = baseURL + popular + apiKey + sortLangPages;
  const response_popularMovies = await fetch(popularMoviesFetchString);
  const popularMoviesData = await response_popularMovies.json();

  return popularMoviesData.results;
};

export { getPopularMovies };
