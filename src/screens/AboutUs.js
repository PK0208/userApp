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
import Ant from 'react-native-vector-icons/AntDesign';

const aboutUsData = [
  {
    name: 'Cancellation and refund policy',
  },
  {
    name: 'Terms and Use',
  },
  {
    name: 'Privacy police',
  },
];

const {height, width} = Dimensions.get('window');
const AboutUs = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%'}}>
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
          <Text style={{color: '#000000', fontSize: 16, margin: 20}}>
            Ksheerdham is a leading manufacture1 and supplier of A2 Gir Cow Milk
            & Milk Products.Our objective is to produce safe and quality milk
            from healthy animals “using management practices that are
            sustainable from an animal welfare, social, economic and
            environmental perspective We are committed to deliver the
            products”in its natural form which is nothing but truly an Amrut.
          </Text>
          {/* {aboutUsData.map((item) => {
            <View
              style={{
                borderWidth: 1,
                borderRadius: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                //margin: 10,
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>{item.name}</Text>
              <Ant
                name="right"
                color="#000000"
                size={20}
                //style={{marginTop: 10}}
              />
            </View>;
          })} */}

          {aboutUsData.map((item) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#707070',
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  //width: '80%',
                  margin: 5,
                  width: width * 0.74133333333,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 250,
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
                    style={{marginTop: 10, marginRight: 8}}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AboutUs;
