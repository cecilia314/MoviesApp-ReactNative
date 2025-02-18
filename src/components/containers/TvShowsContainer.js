import React, { useEffect, useState } from 'react';
import { getTvSeries } from '../../services/api';
import { Center } from '@gluestack-ui/themed';
import MediaList from '../lists/MediaList';
import Loading from '../layout/Loading';
import CustomSelectInput from '../common/CustomSelectInput';

const DEFAULT_CATEGORY = 'airing_today';

const TvShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [tvShow, setTvShow] = useState(null);

  const fetchTvShow = async (selectedCategory) => {
    if (!selectedCategory) return;

    setIsLoading(true);
    try {
      const data = await getTvSeries(selectedCategory);
      setTvShow(data);
    } catch (err) {
      console.error('Error fetching Tv Shows:', err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTvShow(category);
  }, []);

  const handleShowMore = () => {
    navigation.navigate('ShowAll', { category, mediaType: 'tv' });
  };

  return (
    <Center mx="$2" mt="$4" gap="$12 " h="$full">
      <CustomSelectInput
        mediaOptions={['airing_today', 'on_the_air', 'popular', 'top_rated']}
        onInputChange={(newCategory) => {
          setCategory(newCategory);
          fetchTvShow(newCategory);
        }}
        defaultOption={category}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <MediaList
          navigation={navigation}
          media={tvShow}
          mediaType="tv"
          onShowMore={handleShowMore}
        />
      )}
    </Center>
  );
};

export default TvShowsContainer;
