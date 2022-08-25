import defaultPhoto from './default.png';
import { List, Item, Img, Text } from './CastList-styled';

const CastList = ({ castAr }) => {
  const defaultImage = defaultPhoto;
  if (castAr.length === 0) {
    return <p>We don't have any information for cast of this movie.</p>;
  } else {
    return (
      <List>
        {castAr.map(cast => (
          <Item key={cast.id}>
            <Img
              src={
                cast.profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : defaultImage
              }
              alt=""
            ></Img>
            <Text>{cast.original_name}</Text>
            <Text>
              Character: <span>{cast.character}</span>
            </Text>
          </Item>
        ))}
      </List>
    );
  }
};

export default CastList;
