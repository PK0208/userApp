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
import CartScreen from '../screens/CartScreen';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

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
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
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
      <Stack.Screen name="CartScreen" component={CartScreen} />
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
