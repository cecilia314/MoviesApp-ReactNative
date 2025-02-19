import {
  Card,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import CustomButton from './CustomButton';

const MediaCard = ({
  navigation,
  title = 'Movie title',
  image = '../../../assets/movie-poster.png',
  popularity = '',
  releaseDate = '',
  mediaId,
  mediaType,
}) => {
  return (
    <Card p="$5" m="$1.5" borderRadius="$lg">
      <HStack space="md">
        <Image
          h="$full"
          flex={1}
          borderRadius="$md"
          source={
            /\.(jpg|jpeg|png|svg)$/i.test(image)
              ? { uri: image }
              : require('../../../assets/movie-poster.png')
          }
          alt="Media poster"
        />

        <VStack flex={2} gap="$2">
          <Heading size="sm" fontFamily="heading">
            {title}
          </Heading>
          <VStack gap="$1">
            <Text
              fontSize="$sm"
              fontFamily="$heading"
              lineHeight="$md"
              sx={{
                color: '$textLight700',
                _dark: { color: '$textDark200' },
              }}
            >
              Popularity: {popularity}
            </Text>
            <Text
              mb="$1.5"
              fontSize="$sm"
              fontFamily="$heading"
              lineHeight="$md"
              sx={{
                color: '$textLight700',
                _dark: { color: '$textDark200' },
              }}
            >
              Release Date: {releaseDate}
            </Text>
          </VStack>

          <CustomButton
            text="More Details"
            onPressedBtn={() =>
              navigation.navigate('Show', { mediaId, mediaType, title })
            }
          />
        </VStack>
      </HStack>
    </Card>
  );
};

export default MediaCard;
