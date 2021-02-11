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
import Appbar from '../../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';

const {height, width} = Dimensions.get('window');
const Subscriptions = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%', backgroundColor: '#F7F7F7'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          width: width * 0.56,
          alignSelf: 'center',
          margin: 10,
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
        }}>
        <Text
          style={{
            color: '#4C82E8',
            fontSize: 13,
            fontWeight: 'bold',
            margin: 5,
          }}>
          My Subscriptions
        </Text>
      </View>

      <View style={{flexDirection: 'column', marginLeft: 27, margin: 5}}>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
          Why should I subscribe ?
        </Text>
        <View style={{marginLeft: 22}}>
          <Text style={{color: '#000000', fontSize: 18}}>No tension </Text>
          <Text style={{color: '#000000', fontSize: 18}}>Free delivery</Text>
          <Text style={{color: '#000000', fontSize: 18}}>
            Customisable delivery
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('AllCategories')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            width: width * 0.39733333333,
            //height: height * 0.03956834532,
            margin: 10,
            borderRadius: 25,
            backgroundColor: '#4FDD5F',
            borderColor: '#4FDD5F',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              margin: 10,
              color: '#FFFFFF',
            }}>
            Order Now
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Subscriptions;
