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
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');
const Calender = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <View
        style={{
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 25,
          borderColor: '#97D5F3',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#97D5F3',
          marginTop: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            borderColor: '#97D5F3',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#97D5F3',
            margin: 40,
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: 18, color: '#000000'}}
            numberOfLines={1}>
            Total Balance
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 38, color: '#000000'}}
            numberOfLines={1}>
            ₹57.5
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          borderColor: '#97D5F3',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: 40,
          borderRadius: 25,
          borderColor: '#707070',
          backgroundColor: '#FFFFFF',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: '#000000',
            margin: 5,
          }}
          numberOfLines={1}>
          View all transactions
        </Text>

        <Icon
          name="right"
          color="black"
          size={20}
          style={{marginLeft: 40}}
          //onPress={() => props.navigation.navigate('Home')}
        />
      </View>

      <TouchableOpacity onPress={() => console.log('Add Money Clicked')}>
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
            Add Money
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Calender;
