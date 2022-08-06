import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'
export default function App () {
  const [fontsLoading] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoading) {
    <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}


