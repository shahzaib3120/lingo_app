import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {Provider as PaperProvider, Text, useTheme} from 'react-native-paper';
import {lightTheme, darkTheme} from './theme';
const App = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const {colors} = useTheme();
  return (
    <PaperProvider theme={theme}>
      <View
        style={[
          {
            backgroundColor: colors.background,
          },
          styles.container,
        ]}>
        <Text>Hello World!</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
