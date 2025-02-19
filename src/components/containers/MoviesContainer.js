import { useEffect, useState } from 'react';
import CustomSelectInput from '../common/CustomSelectInput';
import { getMovies } from '../../services/api';
import { Center } from '@gluestack-ui/themed';
import MediaList from '../lists/MediaList';
import Loading from '../layout/Loading';

const DEFAULT_CATEGORY = 'now_playing';

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [movies, setMovies] = useState(null);

  const fetchMovies = async (selectedCategory) => {
    if (!selectedCategory) return;

    setIsLoading(true);
    try {
      const data = await getMovies(selectedCategory);
      setMovies(data);
    } catch (err) {
      console.error('Error fetching movies:', err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies(category);
  }, []);

  const handleShowMore = () => {
    navigation.navigate('ShowAll', { category, mediaType: 'movie' });
  };

  return (
    <Center mx="$2" mt="$4" gap="$12" h="$full">
      <CustomSelectInput
        mediaOptions={['now_playing', 'popular', 'top_rated', 'upcoming']}
        onInputChange={(newCategory) => {
          setCategory(newCategory);
          fetchMovies(newCategory);
        }}
        defaultOption={category}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <MediaList
          navigation={navigation}
          media={movies}
          mediaType="movie"
          onShowMore={handleShowMore}
        />
      )}
    </Center>
  );
};

export default MoviesContainer;
