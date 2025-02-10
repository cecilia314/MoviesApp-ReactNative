import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Tabs from './src/components/layout/Tabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <StatusBar style="auto" />
        <VStack marginTop="50">
          <Tabs />
        </VStack>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
