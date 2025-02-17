import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TvShowsScreen from '../screens/TvShowsScreen';
import ShowScreen from '../screens/ShowScreen';

const Stack = createNativeStackNavigator();
const TabStack = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <TabStack.Navigator
    initialRouteName="Movies"
    screenOptions={{
      lazy: true,
      tabBarIndicatorStyle: {
        backgroundColor: '#272635',
        height: 3,
      },
      tabBarActiveTintColor: '#272635',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontSize: 13,
      },
      tabBarStyle: {
        backgroundColor: '#fff',
      },
    }}
  >
    <TabStack.Screen name="Movies" component={MoviesScreen} key="MoviesKey" />
    <TabStack.Screen
      name="Search Results"
      component={SearchScreen}
      key="SearchKey"
    />
    <TabStack.Screen
      name="Tv Shows"
      component={TvShowsScreen}
      key="TvShowsKey"
    />
  </TabStack.Navigator>
);

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
