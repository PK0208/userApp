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
import Ant from 'react-native-vector-icons/AntDesign';

const otherIssues = [
  {
    name: 'Issue with previous order',
  },
  {
    name: 'Recharge or Tech related issues',
  },
  {
    name: 'Start services to your building',
  },
  {
    name: 'Getting started',
  },
];

const generalQueries = [
  {
    name: 'Till what time can you place the order Everyday',
  },
  {
    name: 'When will the order be delivered',
  },
];

const Support = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%'}}>
      <Appbar navigation={props.navigation} />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {otherIssues.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => console.log('Support Screen', item.name)}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#707070',
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  //width: '80%',
                  margin: 5,
                  width: width * 0.856,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width * 0.77333333333,
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
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity>
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
            backgroundColor: '#97D5F3',
            borderColor: '#97D5F3',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              margin: 10,
              color: '#FFFFFF',
            }}>
            FAQs
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {generalQueries.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => console.log('Support Screen', item.name)}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#707070',
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  //width: '80%',
                  margin: 5,
                  width: width * 0.856,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width * 0.77333333333,
                  }}>
                  <Text style={{margin: 10}} ellipsizeMode="tail">
                    {item.name}
                  </Text>
                </View>

                <View style={{flexDirection: 'row-reverse'}}>
                  <Ant
                    name="down"
                    color="#000000"
                    size={20}
                    style={{marginTop: 10, marginRight: 8}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Support;
