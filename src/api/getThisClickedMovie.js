const getThisClickedMovie = async (id) => {
  const apiKey = process.env.REACT_APP_MY_API_KEY;
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const movieID = id + "?api_key=";
  const lang = "&language=en-US";

  const getThisMovieFetchString = baseURL + movieID + apiKey + lang;
  const response_thisMovie = await fetch(getThisMovieFetchString);
  return await response_thisMovie.json();
};

export { getThisClickedMovie };
