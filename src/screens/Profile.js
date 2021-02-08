import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Appbar from '../components/Appbar';
import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';

const {height, width} = Dimensions.get('window');
const Profile = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%'}}>
      <Appbar navigation={props.navigation} />

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require('../assets/images/image_user.jpeg')}
          />
          <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>
            Rahul Kumar
          </Text>
          <Text style={{color: '#000000', fontSize: 20}}>
            rahulkumar@gmail.com
          </Text>
          <Text style={{color: '#000000', fontSize: 20}}>+91 77889900223</Text>
        </View>

        <View>
          <Text style={{fontSize: 18, marginLeft: 15, marginTop: 10}}>
            Address
          </Text>
          <Text style={{fontSize: 18, marginLeft: 15, marginBottom: 10}}>
            1-2/4 Banjara Hills Hyderabad
          </Text>
        </View>
      </View>
      {/* <View style={{alignItems: 'center', marginVertical: 7}}>
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
        <View
          style={{
            borderWidth: 1,
            borderColor: '#97D5F3',
            marginBottom: '-20%',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Rahul Kumar</Text>
            <Text>rahulkumar@gmail.com</Text>
            <Text>+91 77889900223</Text>
          </View>

         
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 60,
    height: 60,
    margin: 10,
  },
  header: {
    backgroundColor: '#97D5F3',
    marginTop: 70,
    borderRadius: 25,
  },
  headerContent: {
    alignItems: 'center',
    //marginBottom: 100,
    marginTop: -70,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    marginBottom: 10,
  },
});
export default Profile;
