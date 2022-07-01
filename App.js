import React from 'react';
import { Provider} from 'react-redux';

import Root from './componentes/Root';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import tema from './componentes/constantes/tema';
import store from './store';


export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require('./assets/fonts/Lato-Regular.ttf'),
    "Lato-Bold": require('./assets/fonts/Lato-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size={tema.fontSize.large} color={tema.color.primary}/>;
  }
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
}


