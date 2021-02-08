import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Text, Image, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import AntIcon from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Font from 'react-native-vector-icons/FontAwesome5';
import Fonts from 'react-native-vector-icons/FontAwesome';
//import Logo from '../assets/images/S Logo.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const routes = [
  {
    name: 'Billing History',
    route: 'Billing',
  },
  {
    name: 'Contact Us',
    route: 'Contact',
  },
  {
    name: 'About Us',
    route: 'About',
  },
  {
    name: 'Log Out',
    route: 'Logout',
  },
];

const {height, width} = Dimensions.get('window');
const DrawerContent = (props) => {
  const name = useSelector((state) => state.login.userName);

  return (
    <View style={{height: '100%', width: '100%', paddingHorizontal: 20}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 5,
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{margin: 5}}>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 63,
                borderWidth: 4,
                borderColor: 'white',
              }}
              source={require('../assets/images/image_user.jpeg')}
            />
          </View>
          <Text style={{marginLeft: 18, fontSize: 18, fontWeight: 'bold'}}>
            Rahul Kumar
          </Text>
        </View>
      </TouchableOpacity>
      <DrawerContentScrollView {...props}>
        <View>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            {/* <Logo style={{width: '50%'}} /> */}
            {/* <Text
              style={{
                position: 'absolute',
                top: 50,
                left: 30,
                fontWeight: 'bold',
                letterSpacing: 1,
                fontSize: 16,
              }}>
              Rahul Kumar
            </Text> */}
          </View>
          <View>
            {/* {routes.map((route) => {
              return (
                <View
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: '#707070',
                    borderRadius: 25,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 230,
                  }}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate(route.route)}>
                    <Text style={{margin: 5}}>{route.name}</Text>
                  </TouchableOpacity>                 
                </View>
              );
            })} */}

            {routes.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate(item.route)}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: '#707070',
                      backgroundColor: '#FFFFFF',
                      flexDirection: 'row',
                      //width: '80%',
                      margin: 5,
                      width: width * 0.5413333333,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: width * 0.49018666666,
                      }}>
                      <Text style={{margin: 10}} ellipsizeMode="tail">
                        {item.name}
                      </Text>
                    </View>

                    <View style={{flexDirection: 'row-reverse'}}>
                      <Ant
                        name="right"
                        color="#000000"
                        size={20}
                        style={{marginTop: 10}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;
