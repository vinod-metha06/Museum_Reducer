import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import InfoScreen from '../Screens/DetailsScreen';
import MuseumHomeScreen from '../Screens/MuseumHome';


export const MesueumAppStack=()=>{
    const Stack=createNativeStackNavigator();
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Mesueum" component={MuseumHomeScreen}/>
            <Stack.Screen 
            name="Info" 
            component={InfoScreen}
            options={({ route }) => ({
                headerTitle: () => <Text style={{fontWeight:'700',fontSize:16}}>{route.params?.item}</Text>,
              })}
              />
        </Stack.Navigator>
    </NavigationContainer>
);
}