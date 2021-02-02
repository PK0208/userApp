import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Font from 'react-native-vector-icons/FontAwesome5';
import Fonts from 'react-native-vector-icons/FontAwesome';
//import Logo from '../assets/images/S Logo.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
const routes = [
  {
    name: 'Billing History',
    route:'Billing'
  },
  {
    name: 'Contact Us',
    route:'Contact',
  },
  {
    name: 'About Us',
    route:'About',
  },
  {
    name: 'Log Out',
    route:'Logout',
  },
  
];
const DrawerContent = (props) => {
  const name = useSelector((state) => state.login.userName);

  return (
    <View style={{height: '100%', width: '100%', paddingHorizontal: 20}}>

<TouchableOpacity>
        <View style={{paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 25,}}>
          <View style={{margin: 5}}>
            <Image
              style={{width: 130,
                height: 130,
                borderRadius: 63,
                borderWidth: 4,
                borderColor: 'white',
               }}
              source={require('../assets/images/image_user.jpeg')}

              
            />
            
           
          </View>
        </View>
        <Text style={{ marginLeft: 18, fontSize: 18, fontWeight:'bold'}}>Rahul Kumar</Text>
      </TouchableOpacity>
      <DrawerContentScrollView {...props}>
        <View>
          <View
            style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
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
          <View style={{marginVertical: 10}}>
            {routes.map((route) => {
              return (
                <TouchableOpacity
                onPress={() => props.navigation.navigate(route.route)}
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical:15,
                    borderWidth: 1,
                    borderColor: '#707070',
                    borderRadius: 25,
                  }}>
                  <Text style={{margin: 5,}}>{route.name}</Text>
                  {/* <Ant name= 'right' size={20} color={'#000000'} style={{marginLeft: '30%'}} /> */}
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
