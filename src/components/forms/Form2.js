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

const Form = ({ onInputChange, onSubmit, defaultOption }) => {
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
              onChangeText={(value) => onInputChange(value)}
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
            mediaOptions={['movie', 'multi', 'tv']}
            defaultOption={defaultOption}
          />
          <CustomButton
            flex={1}
            text="Search"
            iconLeft={SearchIcon}
            onPressedBtn={onSubmit}
          />
        </HStack>

        <FormControlHelper pb="$2">
          <FormControlHelperText>
            Please select a search type
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>
    </VStack>
  );
};

export default Form;
