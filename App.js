import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as Updates from 'expo-updates';

AppRegistry.registerComponent('Delayion', () => App);


export default function App() {

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }


  const [isLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded){
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if(!isLoaded){
    return null;
  }

  return (
    <AppNavigator></AppNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Delayion', () => App);

