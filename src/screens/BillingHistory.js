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
const BillingHistory = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <View style={{alignItems: 'center', marginVertical: 7}}>
        <View style={{marginTop: '50%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/nF3WbSLdkPev3xIPG-7ytagmWru83JdzZ4hfqEba0gNZABX3y7A_0KiMC5Kv8ACYVDPy=s55',
              }}
              resizeMode="contain"
            /> */}

            <Image
              style={styles.imageContainer}
              source={require('../assets/images/new_no_transactions.png')}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'arlrdbd',
              }}>
              No Transaction
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 60,
    height: 60,
    margin: 10,
  },
});
export default BillingHistory;
