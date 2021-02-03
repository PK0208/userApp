import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

import Billing from '../screens/BillingHistory';
import Contact from '../screens/ContactUs';
import About from '../screens/AboutUs';
import Logout from '../screens/LogOut';

import Calender from '../screens/Calender/Calender';
import Orders from '../screens/Calender/Orders';
import Subscriptions from '../screens/Calender/Subscriptions';

import Wallet from '../screens/Wallet/Wallet';
import Support from '../screens/Support/Support';
import AllCategories from '../screens/AllCategories';
import CategoryByName from '../screens/CategoryByName';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const MainStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Billing" component={Billing} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="CategoryByName" component={CategoryByName} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="Logout" component={Home} />
    </Stack.Navigator>
  );
};

const CalenderStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      <Stack.Screen name="CategoryByName" component={CategoryByName} />
    </Stack.Navigator>
  );
};

const WalletStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Wallet" component={Wallet} />
    </Stack.Navigator>
  );
};

const SubscriptionStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
    </Stack.Navigator>
  );
};

const SupportStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Support" component={Support} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  CalenderStackNavigator,
  WalletStackNavigator,
  SubscriptionStackNavigator,
  SupportStackNavigator,
};
