import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';



//import DrawerNavigator from './navigation/DrawerNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
//import AuthStackNavigator from './navigation/AuthStackNavigator';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

const StartScreen = () => {
  const id = useSelector((state) => state.login.userId);

  return (
    <>
     {/*  <NavigationContainer>
        {id == null ? <AuthStackNavigator /> : <DrawerNavigator />}
      </NavigationContainer> */}

<NavigationContainer>
<DrawerNavigator />
      </NavigationContainer>
      
    </>
  );
};
export default StartScreen;
