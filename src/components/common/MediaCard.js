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
  image = '../../assets/splash-icon',
  url,
  popularity = '',
  releaseDate = '',
}) => {
  return (
    <Card p="$5" borderRadius="$lg" width="$full" m="$4">
      <HStack space="md">
        <Image
          h="$full"
          flex={1}
          borderRadius="$md"
          source={
            image.startsWith('http')
              ? { uri: image }
              : require('../../../assets/icon.png')
          }
          alt="Media poster"
        />
        <VStack flex={2} space="$2">
          <Heading size="md" fontFamily="heading">
            {title}
          </Heading>
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
          <CustomButton
            text="More Details"
            onPressedBtn={() => navigation.navigate('Show', { url })}
          />
        </VStack>
      </HStack>
    </Card>
  );
};

export default MediaCard;
