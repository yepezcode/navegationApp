import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const  MenuLateral = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerType={ width >= 768 ? 'permanent' : 'front' }
        drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator"  component={ StackNavigation } />
      <Drawer.Screen name="SettingsScreen"  component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}


const MenuInterno = ( { navigation } : DrawerContentComponentProps<DrawerContentOptions> ) => {
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image
          source={{ uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}
          style={ styles.avatar }
        />
      </View>

    {/*  Opciones de menu */}

    <View style={ styles.menuContainer }>

      <TouchableOpacity  
        onPress={ () => navigation.navigate('StackNavigator')}        
        style={ styles.menuBoton}
      >
        <Text style={ styles.menuTexto} >Navegacion</Text>
      </TouchableOpacity >

      <TouchableOpacity 
        onPress={ () => navigation.navigate('SettingsScreen')}
        style={ styles.menuBoton}
      >
        <Text style={ styles.menuTexto} >Ajustes</Text>
      </TouchableOpacity>
    </View>

    </DrawerContentScrollView>


  );
}