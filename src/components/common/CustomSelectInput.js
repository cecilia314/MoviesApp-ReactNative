import React, { useState } from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetIcon,
} from '@gluestack-ui/themed';
import { ChevronDownIcon, CheckIcon } from '@gluestack-ui/themed';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const CustomSelectInput = ({ mediaOptions = options }) => {
  const [newOption, setNewOption] = useState(mediaOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonGroup>
        <Button
          width="$full"
          variant="outline"
          onPress={() => setIsOpen(true)}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="black"
        >
          <ButtonText fontWeight="$bold" paddingHorizontal="$1" color="black">
            {newOption}
          </ButtonText>
          <ButtonIcon as={ChevronDownIcon} color="black" />
        </Button>
      </ButtonGroup>

      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper marginBottom="8">
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {options.map((option, index) => (
            <ActionsheetItem
              key={index}
              onPress={() => {
                setNewOption(option);
                setIsOpen(false);
              }}
              backgroundColor={newOption === option ? '#A5B452' : 'transparent'}
            >
              <ActionsheetItemText
                color={newOption === option ? 'white' : 'black'}
              >
                {option}
              </ActionsheetItemText>

              {newOption === option && (
                <ActionsheetIcon as={CheckIcon} color="white" size="xl" />
              )}
            </ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

export default CustomSelectInput;
