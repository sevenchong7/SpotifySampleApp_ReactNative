import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigation, RootDrawerNavigation, RootNavigation } from './src/navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={styles.container}>
          <RootDrawerNavigation />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
