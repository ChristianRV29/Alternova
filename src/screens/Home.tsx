import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ThemeContext } from '~src/context/Theme';

export const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <View>
      <Text>Welcome to home!</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => toggleTheme()}>
        <Text>Toggle current theme!: {theme.currentTheme}</Text>
      </TouchableOpacity>
    </View>
  );
};
