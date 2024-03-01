const getData = async (searchValue) => {
  const response = await fetch(
    "https://www.omdbapi.com/?apikey=f51c15f6&s=" + searchValue
  );
  const result = await response.json();
  if (response.ok) {
    return result.Search;
  } else {
    console.log(result);
    throw { message: "Failed to fetch movies, " + result.Error, status: 500 };
  }
};

export default getData;
