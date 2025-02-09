import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import CustomButton from './src/components/common/CustomButton';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <CustomButton text="Boton" iconLeft="true" />
        </View>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
