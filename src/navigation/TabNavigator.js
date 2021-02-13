import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MainStackNavigator,
  CalenderStackNavigator,
  WalletStackNavigator,
  SubscriptionStackNavigator,
  SupportStackNavigator,
} from './StackNavigator';

import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

//import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ant from 'react-native-vector-icons/AntDesign';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({})}
      tabBarOptions={{
        activeTintColor: '#06A3EF',
        inactiveTintColor: '#515152A5',
        barstyle: styles.container,
        backgroundColor: '#F7F7F7',
        style: {
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          borderTopColor: '#F7F7F7',
          height: 55,
          paddingBottom: 5,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={size ? size : 20}
              color={color}
              focused={focused}
            />
          ),
        }}
        component={MainStackNavigator}
      />
      <Tab.Screen
        name="Calender"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MatCom
              name={focused ? 'calendar-clock' : 'calendar-clock'}
              size={20}
              color={color}
              focused={focused}
            />
          ),
        }}
        component={CalenderStackNavigator}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MatCom
              name={focused ? 'wallet-outline' : 'wallet-outline'}
              size={20}
              color={color}
              focused={focused}
            />
          ),
        }}
        component={WalletStackNavigator}
      />
      <Tab.Screen
        name="Subscriptions"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name={focused ? 'profile' : 'profile'}
              size={20}
              color={color}
              focused={focused}
            />
          ),
        }}
        component={SubscriptionStackNavigator}
      />
      <Tab.Screen
        name="Support"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MatCom
              name={focused ? 'headphones' : 'headphones'}
              size={20}
              color={color}
              focused={focused}
            />
          ),
        }}
        component={SupportStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default BottomTabNavigator;
