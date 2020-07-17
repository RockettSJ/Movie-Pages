const getSimilarMovies = async (id) => {
  const apiKey = process.env.REACT_APP_MY_API_KEY;
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const movieID = id;
  const similar = "/similar?api_key=";
  const langPages = "&language=en-US&page=1";

  const getSimilarFetchString =
    baseURL + movieID + similar + apiKey + langPages;
  const response_similar = await fetch(getSimilarFetchString);
  const similarData = await response_similar.json();

  //Ignore 'unresolved variable' warning -> it is just returning a subarray from the response
  return similarData.results;
};

export { getSimilarMovies };
