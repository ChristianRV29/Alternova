import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to home!</Text>
      </View>
    </SafeAreaView>
  );
};
