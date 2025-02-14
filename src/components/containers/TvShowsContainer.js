import React from 'react';
import { useEffect, useState } from 'react';
import { getTvSeries } from '../../services/api';
import { Center, VStack } from '@gluestack-ui/themed';
import MediaList from '../lists/MediaList';
import Loading from '../layout/Loading';
import CustomSelectInput from '../common/CustomSelectInput';

const DEFAULT_CATEGORY = 'airing_today';

const TvShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [tvShow, setTvShow] = useState(null);

  const fetchTvShow = async (selectedCategory) => {
    setIsLoading(true);
    getTvSeries(selectedCategory).then((data) => {
      setTvShow(data).catch((err) => console.error('API Error:', err));
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTvShow(category);
  }, []);

  return (
    <Center mx="$2" my="$4" gap="$4">
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
        <MediaList navigation={navigation} media={tvShow} mediaType="tv" />
      )}
    </Center>
  );
};

export default TvShowsContainer;
