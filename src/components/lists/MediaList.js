import { FlatList } from '@gluestack-ui/themed';
import MediaCard from '../common/MediaCard';

const MediaList = (props) => {
  const { navigation, media, mediaType } = props;

  return (
    <FlatList
      width="100%"
      data={media}
      renderItem={({ item }) => (
        <MediaCard
          navigation={navigation}
          title={item.title || item.name}
          image={
            'https://media.themoviedb.org/t/p/w94_and_h141_bestv2' +
            item.poster_path
          }
          popularity={item.popularity}
          releaseDate={item.release_date}
          mediaId={item.id}
          mediaType={mediaType === 'multi' ? item.media_type : mediaType}
        />
      )}
      contentContainerStyle={{ paddingBottom: 60 }}
    />
  );
};

export default MediaList;
