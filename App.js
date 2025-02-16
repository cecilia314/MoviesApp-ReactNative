import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider, VStack, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Header from './src/components/layout/Header';
import { getMovies } from './src/services/api';
import AppStack from './src/components/stacks/AppStack';

const fetchMovies = () => {
  getMovies('popular')
    .then((data) => console.log('Fetched Movies:', data))
    .catch((err) => console.error('API Error:', err));
};

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Header />
        <AppStack />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
