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
const Support = (props) => {
  const isFocused = useIsFocused();
  
  useEffect(() => {
    
  }, [props, isFocused]);

  

  return (
    <View style={{height:'100%'}}>
      <Appbar navigation={props.navigation} />
      
      <View>
        <Text style= {{marginLeft: 20, marginTop: 5}}>Get help with Other issues</Text>

        <View style= {{margin: 20, borderWidth: 1, borderColor: '#707070', borderRadius: 15, padding: 5}}>
          <Text>Issue with previous order</Text>
        </View>

        <View style= {{margin: 20, borderWidth: 1, borderColor: '#707070', borderRadius: 15, padding: 5}}>
          <Text>Recharge or Tech related issues</Text>
        </View>

        <View style= {{margin: 20, borderWidth: 1, borderColor: '#707070', borderRadius: 15, padding: 5}}>
          <Text>Start services to your building</Text>
        </View>


        <View style= {{margin: 20, borderWidth: 1, borderColor: '#707070', borderRadius: 15, padding: 5}}>
          <Text>Getting started</Text>
        </View>

        <Text>Button FAQ</Text>

        <Text style= {{marginLeft: 20, marginTop: 5}}>General queries</Text>

        <View style= {{margin: 20, borderWidth: 1, borderColor: '#707070', borderRadius: 15, padding: 5}}>
          <Text>Till what time can you place the order Everyday</Text>
        </View>

        <View style= {{margin: 20, borderWidth: 1, borderColor: '#707070', borderRadius: 15, padding: 5}}>
          <Text>When will the order be delivered</Text>
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({});
export default Support;
