import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AppStack />
        <StatusBar backgroundColor="#272635" style="light" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
