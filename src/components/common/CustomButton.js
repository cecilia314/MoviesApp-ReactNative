import React, { useState } from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
} from '@gluestack-ui/themed';
import { SearchIcon } from '@gluestack-ui/themed';

const CustomButton = ({
  text,
  iconLeft = false,
  onPressedBtn,
  width = '$full',
  flex = 1,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonGroup flex={flex}>
      <Button
        width={width}
        bgColor={isHovered ? '#2B6CB0' : '#3c91e6'}
        onPress={onPressedBtn}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
        flexDirection="row"
        alignItems="center"
      >
        {iconLeft && (
          <ButtonIcon
            as={SearchIcon}
            color={isHovered ? '#C8D96F' : '#e8e9f3'}
          />
        )}

        <ButtonText
          fontWeight="$bold"
          color={isHovered ? '#C8D96F' : '#e8e9f3'}
          paddingHorizontal="$1"
        >
          {text}
        </ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default CustomButton;
