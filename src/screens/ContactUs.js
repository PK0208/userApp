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
const ContactUs = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%', backgroundColor: '#F7F7F7'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <View style={{alignItems: 'center', marginVertical: 7}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            borderColor: '#FFFFFF',
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            margin: 10,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              margin: 20,
              fontFamily: 'Avenir Light',
            }}>
            Need help? Reach out to us via chat or call and one Of our customer
            executive will be un touch shortly
          </Text>

          <TouchableOpacity onPress={() => console.log('Call us Clicked')}>
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
                  margin: 5,
                  color: '#FFFFFF',
                  fontFamily: 'Avenir Black',
                }}>
                Call us
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: '30%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={styles.imageContainer}
              source={require('../assets/images/new_contactus.jpg')}
              resizeMode="contain"
            />
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
export default ContactUs;
