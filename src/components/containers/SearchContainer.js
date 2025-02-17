import { useState } from 'react';
import React from 'react';
import Form from '../forms/Form';
import { Center, Text, VStack } from '@gluestack-ui/themed';
import Loading from '../layout/Loading';
import MediaList from '../lists/MediaList';
import { getSearch } from '../../services/api';

const DEFAULT_CATEGORY = 'multi';

const SearchContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialSearch, setInitialSearch] = useState(false);
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [keyword, setKeyword] = useState('');
  const [mediaShow, setMediaShow] = useState([]);

  const fetchMediaShow = async () => {
    if (!keyword.trim()) return;
    setInitialSearch(true);
    setIsLoading(true);

    try {
      const data = await getSearch(category, keyword);
      setMediaShow(data);
    } catch (err) {
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack>
      <Form
        onInputTextChange={setKeyword}
        onInputCategoryChange={setCategory}
        onSubmit={fetchMediaShow}
        mediaOptions={['movie', 'multi', 'tv']}
        defaultOption={DEFAULT_CATEGORY}
      />

      {!initialSearch ? (
        <Center h="50%">
          <Text textAlign="center" fontSize="$2xl" fontWeight="bold">
            Please initiate a search
          </Text>
        </Center>
      ) : isLoading ? (
        <Loading />
      ) : (
        <MediaList
          navigation={navigation}
          media={mediaShow}
          mediaType={category}
        />
      )}
    </VStack>
  );
};

export default SearchContainer;
