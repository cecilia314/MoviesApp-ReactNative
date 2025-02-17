import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform } from 'react-native';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TvShowsScreen from '../screens/TvShowsScreen';
import ShowScreen from '../screens/ShowScreen';
import Tabs from '../layout/Tabs';

const Stack = createNativeStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

const TabNavigator = () => {
  if (Platform.OS === 'ios') {
    return <Tabs />;
  } else {
    return (
      <TopTabs.Navigator
        initialRouteName="Movies"
        screenOptions={{
          lazy: false,
          tabBarIndicatorStyle: { backgroundColor: '#272635', height: 3 },
          tabBarActiveTintColor: '#272635',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 13 },
          tabBarStyle: { backgroundColor: '#fff' },
        }}
      >
        <TopTabs.Screen name="Movies" component={MoviesScreen} />
        <TopTabs.Screen name="Search" component={SearchScreen} />
        <TopTabs.Screen name="TV Shows" component={TvShowsScreen} />
      </TopTabs.Navigator>
    );
  }
};

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{
          headerShown: true,
          headerTitle: 'Movies App',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E8E9F3',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#272635',
          },
        }}
      />

      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ route }) => ({
          headerTitleStyle: { fontSize: 14 },
          title: route.params.title,
          headerBackTitle: 'Back to List',
          headerBackTitleVisible: true,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
