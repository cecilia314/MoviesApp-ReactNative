import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TvShowsScreen from '../screens/TvShowsScreen';
import ShowScreen from '../screens/ShowScreen';

const TabStack = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const MoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Movies list"
      component={MoviesScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Show"
      component={ShowScreen}
      options={({ route }) => ({
        title: route.params.label,
        headerTitle: 'Back to List',
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontSize: 14,
        },
        // headerBackTitle: 'Back to List',
        // tabBarStyle: { display: 'none' },
      })}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Show"
      component={ShowScreen}
      options={({ route }) => ({
        title: route.params.label,
        headerBackTitle: 'Back to List',
      })}
    />
  </Stack.Navigator>
);

const TvShowsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tv Shows list"
      component={TvShowsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Show"
      component={ShowScreen}
      options={({ route }) => ({
        title: route.params.label,
        headerBackTitle: 'Back to List',
      })}
    />
  </Stack.Navigator>
);

const AppTabs = () => (
  <NavigationContainer>
    <TabStack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <TabStack.Screen name="Movies" component={MoviesStack} />
      <TabStack.Screen name="Search Results" component={SearchStack} />
      <TabStack.Screen name="Tv Shows" component={TvShowsStack} />
    </TabStack.Navigator>
  </NavigationContainer>
);

export default AppTabs;
