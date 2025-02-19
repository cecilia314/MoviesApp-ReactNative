import { FlatList, Box } from '@gluestack-ui/themed';
import MediaCard from '../common/MediaCard';
import CustomButton from '../common/CustomButton';

const MediaList = ({
  navigation,
  media,
  mediaType,
  numberOfItems = 10,
  showMoreButton = true,
  onShowMore,
}) => {
  const limitedMedia = media?.slice(0, numberOfItems);

  return (
    <FlatList
      width="100%"
      data={limitedMedia}
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
      contentContainerStyle={{ paddingBottom: 40 }}
      ListFooterComponent={
        showMoreButton && media?.length > numberOfItems ? (
          <Box mt="$4" alignItems="center" mx="$8">
            <CustomButton text="Show More" onPressedBtn={onShowMore} />
          </Box>
        ) : null
      }
    />
  );
};

export default MediaList;
