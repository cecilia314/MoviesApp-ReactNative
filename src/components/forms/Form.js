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
  return (
    <VStack width="100%" p="$4" my="$2">
      <FormControl isRequired>
        <FormControl.Label fontSize="sm">
          <FormControlLabelText>
            Search Movie/ Tv Show Name
          </FormControlLabelText>
        </FormControl.Label>

        <HStack width="100%" alignItems="center" pb="$4">
          <Input flex={1} px="$3" alignItems="center">
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
            flex={2}
            width="$full"
            mediaOptions={mediaOptions}
            defaultOption={defaultOption}
            onInputChange={onInputCategoryChange}
          />
          <CustomButton
            flex={1}
            text="Search"
            iconLeft={SearchIcon}
            onPressedBtn={onSubmit}
          />
        </HStack>

        <FormControlHelper>
          <FormControlHelperText>
            Please select a search type
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>
    </VStack>
  );
};

export default Form;
