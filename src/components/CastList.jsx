const CastList = ({ castAr }) => {
  return (
    <ul>
      {castAr.map(cast => (
        <li>
          <img
            src={
              cast.profile_path !== null
                ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                : `https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg`
            }
            alt=""
          ></img>
          <p>{cast.original_name}</p>
          <p>
            Character: <span>{cast.character}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
