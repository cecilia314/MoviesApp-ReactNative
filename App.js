import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Center, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import CustomButton from './src/components/common/CustomButton';
import MediaCard from './src/components/common/MediaCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Center>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <CustomButton text="Boton" iconLeft="true" />
          <MediaCard />
        </Center>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
