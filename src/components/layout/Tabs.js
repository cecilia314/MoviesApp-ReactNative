import React, { useState } from 'react';
import { Text, Box, HStack, Pressable } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TvShowsScreen from '../screens/TvShowsScreen';

const tabs = [
  { title: 'Movies' },
  { title: 'Search Results' },
  { title: 'TV Shows' },
];

const Tabs = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <Box width="$full" flex={1}>
      <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabPanel activeTab={activeTab} navigation={navigation} />
    </Box>
  );
};

const TabBar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Box width="$full">
      <HStack>
        {tabs.map((tab) => (
          <Pressable
            key={tab.title}
            onPress={() => setActiveTab(tab.title)}
            borderBottomWidth="$2"
            borderBottomColor={
              activeTab === tab.title ? '#272635' : '$coolGray300'
            }
            paddingHorizontal="$2"
            paddingVertical="$4"
            width="$1/3"
          >
            <Text
              size="sm"
              fontWeight="$medium"
              textAlign="center"
              color={activeTab === tab.title ? '#272635' : '$coolGray300'}
            >
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
};

const TabPanel = ({ activeTab, navigation }) => {
  return (
    <Box flex={1} mt="$4" px="$4">
      {activeTab === 'Movies' && <MoviesScreen navigation={navigation} />}
      {activeTab === 'Search Results' && (
        <SearchScreen navigation={navigation} />
      )}
      {activeTab === 'TV Shows' && <TvShowsScreen navigation={navigation} />}
    </Box>
  );
};

export default Tabs;
