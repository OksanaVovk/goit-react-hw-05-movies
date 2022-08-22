export default async function fetchFilm(url) {
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}
