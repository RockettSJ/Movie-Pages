const getUpcomingMovies = async () => {
  const apiKey = process.env.REACT_APP_MY_API_KEY;
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const sortLangPages = "&language=en-US&page=1";
  const upcoming = "upcoming?api_key=";
  const popularMoviesFetchString = baseURL + upcoming + apiKey + sortLangPages;
  const response_upcomingMovies = await fetch(popularMoviesFetchString);
  const upcomingMoviesData = await response_upcomingMovies.json();

  return upcomingMoviesData.results;
};

export { getUpcomingMovies };
