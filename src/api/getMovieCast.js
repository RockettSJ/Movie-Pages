const getMovieCast = async (id) => {
  const apiKey = process.env.REACT_APP_MY_API_KEY;
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const movieID = id;
  const credits = "/credits?api_key=";
  const lang = "&language=en-US";

  const getCreditsFetchString = baseURL + movieID + credits + apiKey + lang;
  const response_credits = await fetch(getCreditsFetchString);
  const creditsData = await response_credits.json();

  //Ignore 'unresolved variable' warning -> it is just returning a subarray from the response
  return creditsData.cast;
};

export { getMovieCast };
