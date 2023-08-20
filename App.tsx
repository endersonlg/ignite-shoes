import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import {  tagUserInfoCreate } from './src/notifications/noticationsTags';
import { useEffect } from 'react';

OneSignal.setAppId('8206af09-1f16-43f1-a613-130d7228c346');

OneSignal.setEmail('endersonluciog@gmail.com');

OneSignal.promptForPushNotificationsWithUserResponse()


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate()

  useEffect(()=>{
    const unsubscribe = OneSignal.setNotificationOpenedHandler((response)=>{
      
      const {actionId} = response.action as any

      switch(actionId){
        case '1':
          return console.log('Ver todas')
        
          case '2':
            return console.log('Ver pedido')

          default:
            return console.log('Nao foi clicado em nenhum botao')
      }

    })

    return ()=>unsubscribe;
  },[])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}