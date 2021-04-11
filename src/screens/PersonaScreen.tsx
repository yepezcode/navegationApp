import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';



// interface RouteParams {
//     id : number;
//     nombre: string;
// }
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'> {

}

export const PersonaScreen = ( { route, navigation } : Props) => {

    const params = route.params;

    useEffect(() => {
        title: params.nombre
    })

   return (
       <View style={ styles.globalMargin } >
           <Text style={ styles.title } >

            {

                JSON.stringify( params, null, 3)
            }
           </Text>
       </View>
  )
}