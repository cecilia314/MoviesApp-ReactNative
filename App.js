import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Tabs from './src/components/layout/Tabs';
import Header from './src/components/layout/Header';
import Loading from './src/components/layout/Loading';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Header />
        <Tabs />
        <Loading />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
