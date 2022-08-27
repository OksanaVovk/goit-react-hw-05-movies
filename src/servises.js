export const KEY_API = '024bf82d4805f650033dc69997860333';

export async function fetchPopularFilms() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY_API}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchSearchFilms(searchWord) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false&query=${searchWord}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchDetailFilm(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchCasts(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}
