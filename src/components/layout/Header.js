import { Box, SafeAreaView, StatusBar, Text } from '@gluestack-ui/themed';

export const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#272635' }}>
      <StatusBar barStyle="light-content" backgroundColor="#272635" />

      <Box
        bg="#272635"
        alignItems="center"
        justifyContent="center"
        safeAreaTop
        paddingTop="$4"
        paddingBottom="$2"
      >
        <Text color="#E8E9F3" fontSize="$lg" fontWeight="bold">
          Movies App
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
