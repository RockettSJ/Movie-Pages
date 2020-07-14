const getMoviesNowPlaying = async () => {
  const apiKey = process.env.REACT_APP_MY_API_KEY;
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const sortLangPages = "&language=en-US&page=1";
  const nowPlaying = "now_playing?api_key=";
  const popularMoviesFetchString =
    baseURL + nowPlaying + apiKey + sortLangPages;
  const response_moviesNowPlaying = await fetch(popularMoviesFetchString);
  const moviesNowPlayingData = await response_moviesNowPlaying.json();

  return moviesNowPlayingData.results;
};

export { getMoviesNowPlaying };
