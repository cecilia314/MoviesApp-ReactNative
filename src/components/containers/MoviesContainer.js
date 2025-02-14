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
      const response = await getMovies(selectedCategory);
      setMovies(response);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(category);
  }, []);

  return (
    <Center>
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
        <MediaList navigation={navigation} media={movies} mediaType="movie" />
      )}
    </Center>
  );
};

export default MoviesContainer;
