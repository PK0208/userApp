import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Appbar from '../components/Appbar';
import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const cartData = [
  {
    name: 'A2 Gir cow khoya (one KG) 1000gm',
    price: 700,
  },

  {
    name: 'A2 Gir cow khoya (one KG) 1000gm',
    price: 700,
  },

  {
    name: 'A2 Gir cow khoya (one KG) 1000gm',
    price: 700,
  },
];

const Home = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('Use Effect Cart Screen');
  }, [props, isFocused]);

  return (
    <View style={{height: '100%', backgroundColor: '#F7F7F7'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            margin: 5,
          }}>
          <Text style={{color: '#525253', fontSize: 20, fontWeight: 'bold'}}>
            Confirm Order
          </Text>
        </View>

        {cartData.map((item) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'stretch',
                alignItems: 'stretch',
                borderWidth: 1,
                margin: 10,
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 5,
                }}>
                <Text
                  style={{
                    color: '#525253',
                    fontSize: 14,
                    margin: 5,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={2}>
                  A2 Gir cow khoya (one KG) 1000gm
                </Text>
                <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
                  <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="plus"
                        color="#303843"
                        size={18}
                        //style={{marginHorizontal: 15}}
                        onPress={() => console.log('Plus Icon Pressed')}
                      />
                      <Text
                        style={{
                          color: '#525253',
                          fontSize: 13,
                          fontWeight: '200',
                          marginHorizontal: 5,
                        }}>
                        2
                      </Text>

                      <Icon
                        name="minus"
                        color="#303843"
                        size={18}
                        //style={{marginHorizontal: 15}}
                        onPress={() => console.log('Minus Icon Pressed')}
                      />
                    </View>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 5,
                      }}>
                      RS 700.0
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            alignItems: 'stretch',
            borderWidth: 1,
            margin: 10,
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#525253',
              fontSize: 14,
              margin: 5,
              fontWeight: 'bold',
            }}
            numberOfLines={2}>
            A2 Gir cow khoya (one KG) 1000gm
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="plus"
                  color="#303843"
                  size={18}
                  //style={{marginHorizontal: 15}}
                  onPress={() => console.log('Plus Icon Pressed')}
                />
                <Text
                  style={{
                    color: '#525253',
                    fontSize: 13,
                    fontWeight: '200',
                    marginHorizontal: 5,
                  }}>
                  2
                </Text>

                <Icon
                  name="minus"
                  color="#303843"
                  size={18}
                  //style={{marginHorizontal: 15}}
                  onPress={() => console.log('Minus Icon Pressed')}
                />
              </View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                RS 700.0
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formContent: {
    flexDirection: 'row',
    margin: 15,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 25,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  cardStyle: {
    width: width * 0.85285333333,
    //height: height * 0.07194244604,
    backgroundColor: '#FFFFFFE6',
    borderWidth: 1,
    borderColor: '#F7F7F7',
  },
  cardContainer: {
    width: 110,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    //margin: 15,
    backgroundColor: '#9AD9F7',
  },
  imageContainer: {
    width: 60,
    height: 60,
    margin: 10,
  },
});
export default Home;
