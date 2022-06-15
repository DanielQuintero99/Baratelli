import React from 'react';
import Home from './componentes/Home';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import tema from './componentes/constantes/tema';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require('./assets/fonts/Lato-Regular.ttf'),
    "Lato-Bold": require('./assets/fonts/Lato-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size={large} color={tema.color.primary}/>;
  }
  return (
    <>
      <Home/>
    </>
  );
}


