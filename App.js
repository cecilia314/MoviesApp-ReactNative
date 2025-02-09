import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Center, GluestackUIProvider, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import CustomButton from './src/components/common/CustomButton';
import DetailsCard from './src/components/common/DetailsCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <StatusBar style="auto" />
        <VStack>
          <CustomButton text="Boton" iconLeft="true" />
          <DetailsCard />
        </VStack>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
