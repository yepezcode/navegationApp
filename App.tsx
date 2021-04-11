import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
const App = () => {
   return (
       <NavigationContainer>
           {/* <StackNavigation /> */}
           {/* <MenuLateralBasico /> */}
           <MenuLateral/>
       </NavigationContainer>
  )
}

export default App;