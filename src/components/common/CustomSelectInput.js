import React, { useState, useEffect } from 'react';
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

const CustomSelectInput = ({
  mediaOptions,
  onInputChange,
  defaultOption,
  width = '$3/5',
  flex = 1,
}) => {
  const [newOption, setNewOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonGroup flex={flex}>
        <Button
          width={width}
          variant="outline"
          onPress={() => setIsOpen(true)}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="#272635"
        >
          <ButtonText fontWeight="$bold" paddingHorizontal="$1" color="black">
            {newOption
              .replace(/_/g, ' ')
              .replace(/\b\w/g, (char) => char.toUpperCase())}
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
          {mediaOptions.map((option, index) => (
            <ActionsheetItem
              key={index}
              onPress={() => {
                setNewOption(option);
                onInputChange(option);
                setIsOpen(false);
              }}
              backgroundColor={newOption === option ? '#A5B452' : 'transparent'}
            >
              <ActionsheetItemText
                color={newOption === option ? 'white' : 'black'}
              >
                {option
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
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
