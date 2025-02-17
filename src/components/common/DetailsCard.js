import { Dimensions } from 'react-native';
import {
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Divider,
  ScrollView,
} from '@gluestack-ui/themed';

const { height } = Dimensions.get('window');

const DetailsCard = ({
  title = 'Movie/TV title',
  description = 'Loading description ...',
  popularity = '',
  releaseDate = '',
}) => {
  return (
    <ScrollView>
      <Center bgColor="#E8E9F3" flex={1} padding="$4" minHeight="$full">
        <Heading
          size="2xl"
          fontFamily="heading"
          marginVertical="$4"
          textAlign="center"
        >
          {title}
        </Heading>

        <VStack mb="$6" flex={1} width="100%" gap="$4">
          <Image
            height={height * 0.4}
            width="full"
            marginVertical="$1.5"
            marginHorizontal="$12"
            borderRadius="$md"
            source={require('../../../assets/movie-poster.png')}
            alt="Media poster"
          />

          <VStack flex={1} marginHorizontal="$4" gap="$2">
            <Text fontSize="$sm" textAlign="justify" lineHeight="$md">
              {description || "This title doesn't have an overview yet"}
            </Text>

            <HStack space="md" alignItems="center" mt="$2">
              <Text fontSize="$sm" fontFamily="$heading" lineHeight="$md">
                Popularity: {popularity || '-'}
              </Text>
              <Divider orientation="vertical" h="$4" backgroundColor="black" />
              <Text fontSize="$sm" fontFamily="$heading" lineHeight="$md">
                Release Date: {releaseDate || '-'}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default DetailsCard;
