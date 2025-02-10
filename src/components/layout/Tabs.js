import React, { useState } from 'react';
import { Text, Box, HStack, Pressable } from '@gluestack-ui/themed';

const tabs = [
  { title: 'Movies' },
  { title: 'Search Results' },
  { title: 'TV Shows' },
];

const tabsData = [
  'Movies Content',
  'Search Results Content',
  'TV Shows Content',
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Box>
      <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabPanel activeTab={activeTab} />
    </Box>
  );
};

const TabBar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Box width="$full">
      <HStack>
        {tabs.map((tab, index) => (
          <Pressable
            key={tab.title}
            onPress={() => setActiveTab(tab)}
            borderBottomWidth="$2"
            borderBottomColor={
              activeTab.title === tab.title ? '#272635' : '$coolGray300'
            }
            paddingHorizontal="$2"
            paddingVertical="$2"
            width="$1/3"
          >
            <Text
              size="sm"
              fontWeight="$medium"
              textAlign="center"
              color={activeTab.title === tab.title ? '#272635' : '$coolGray300'}
            >
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
};

const TabPanel = ({ activeTab }) => {
  return (
    <Box mt="$4" px="$4">
      <Text fontSize="$md" fontWeight="$medium">
        {tabsData[tabs.findIndex((tab) => tab.title === activeTab.title)]}
      </Text>
    </Box>
  );
};

export default Tabs;
