const apiKey = process.env.REACT_APP_MY_API_KEY;
const baseURL = "https://api.themoviedb.org/3/movie/";
const lang = "&language=en-US";
const sortPages = "&page=1";

const getTheMovie = async (id) => {
  const movieID = id + "?api_key=";
  const getThisMovieFetchString = baseURL + movieID + apiKey + lang;
  const response_thisMovie = await fetch(getThisMovieFetchString);
  return await response_thisMovie.json();
};

const getMovieCast = async (id) => {
  const movieID = id;
  const credits = "/credits?api_key=";
  const fetchString = baseURL + movieID + credits + apiKey + lang;
  const response_credits = await fetch(fetchString);
  const creditsData = await response_credits.json();

  return creditsData.cast;
};

const getSimilarMovies = async (id) => {
  const movieID = id;
  const similar = "/similar?api_key=";
  const fetchString = baseURL + movieID + similar + apiKey + lang + sortPages;
  const response_similar = await fetch(fetchString);
  const similarData = await response_similar.json();

  return similarData.results;
};

const getPopularMovies = async () => {
  const popular = "popular?api_key=";
  const fetchString = baseURL + popular + apiKey + lang + sortPages;
  const response_popularMovies = await fetch(fetchString);
  const popularMoviesData = await response_popularMovies.json();

  return popularMoviesData.results;
};

export { getTheMovie, getMovieCast, getSimilarMovies, getPopularMovies };
