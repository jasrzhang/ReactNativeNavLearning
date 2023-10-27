/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
