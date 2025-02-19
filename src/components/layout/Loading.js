import { VStack, Spinner, Text } from '@gluestack-ui/themed';
import React from 'react';

const Loading = () => {
  return (
    <VStack
      space="sm"
      alignItems="center"
      justifyContent="center"
      minHeight="50%"
    >
      <Spinner size="large" color="#3C91E6" />
      <Text size="md" fontWeight="$semibold" color="#3C91E6">
        Please Wait
      </Text>
    </VStack>
  );
};

export default Loading;
