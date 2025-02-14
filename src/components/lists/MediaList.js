import { FlatList } from '@gluestack-ui/themed';
import MediaCard from '../common/MediaCard';

const MediaList = (props) => {
  const { navigation, media, mediaType } = props;

  return (
    <FlatList
      width="$full"
      data={media}
      renderItem={({ item }) => (
        <MediaCard
          navigation={navigation}
          title={item.title}
          image={
            'https://media.themoviedb.org/t/p/w94_and_h141_bestv2' +
            item.poster_path
          }
          popularity={item.popularity}
          releaseDate={item.release_date}
          mediaId={item.id}
          mediaType={mediaType}
        />
      )}
    />
  );
};

export default MediaList;
