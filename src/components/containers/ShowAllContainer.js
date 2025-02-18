import React, { useEffect, useState } from 'react';
import { Center } from '@gluestack-ui/themed';
import MediaList from '../lists/MediaList';
import Loading from '../layout/Loading';
import { getTvSeries, getMovies } from '../../services/api';

const ShowAllContainer = ({ navigation, category, mediaType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [media, setMedia] = useState(null);

  const fetchMedia = async () => {
    setIsLoading(true);
    try {
      let data;
      if (mediaType === 'movie') {
        data = await getMovies(category);
      } else {
        data = await getTvSeries(category);
      }
      setMedia(data);
    } catch (err) {
      console.error('Error fetching media:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [category, mediaType]);

  return (
    <Center mx="$2" mt="$4" gap="$12 " h="$full">
      {isLoading ? (
        <Loading />
      ) : (
        <MediaList
          navigation={navigation}
          media={media}
          mediaType={mediaType}
          numberOfItems={20}
          showMoreButton={false}
        />
      )}
    </Center>
  );
};

export default ShowAllContainer;
