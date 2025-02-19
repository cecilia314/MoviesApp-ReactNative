import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  HStack,
  Icon,
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  VStack,
} from '@gluestack-ui/themed';
import CustomSelectInput from '../common/CustomSelectInput';
import CustomButton from '../common/CustomButton';

const Form = ({
  onInputTextChange,
  onInputCategoryChange,
  onSubmit,
  mediaOptions,
  defaultOption,
  keyword,
}) => {
  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    if (!keyword.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    onSubmit();
  };

  return (
    <VStack width="100%" p="$4" my="$2">
      <FormControl isInvalid={isError} isRequired>
        <FormControl.Label fontSize="sm">
          <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
        </FormControl.Label>

        <HStack width="100%" alignItems="center" pb="$4">
          <Input
            flex={1}
            px="$3"
            alignItems="center"
            borderColor={isError ? 'red' : '#272635'}
          >
            <InputIcon>
              <Icon as={SearchIcon} size="sm" />
            </InputIcon>
            <InputField
              value={keyword}
              onChangeText={onInputTextChange}
              placeholder="i.e. James Bond, Game of Thrones"
            />
          </Input>
        </HStack>

        <FormControl.Label fontSize="sm">
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>

        <HStack width="100%" space="sm" alignItems="center">
          <CustomSelectInput
            flex={1.5}
            width="$full"
            mediaOptions={mediaOptions}
            defaultOption={defaultOption}
            onInputChange={onInputCategoryChange}
            onError={isError}
          />

          <CustomButton
            flex={1}
            text="Search"
            iconLeft={SearchIcon}
            onPressedBtn={handleSearch}
          />
        </HStack>

        <FormControlHelper>
          <FormControlHelperText color={isError ? 'red' : 'coolGray500'}>
            {isError
              ? 'Movie/TV show name is required'
              : 'Please select a search type'}
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>
    </VStack>
  );
};

export default Form;
