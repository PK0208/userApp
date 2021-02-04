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

const homePageData = [
  {
    name: 'A2 Milk',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },

  {
    name: 'Oil & Ghee',
    image:
      'https://lh3.googleusercontent.com/pxYgcjlCiZTJ4zPtLg8C0Kf7xysC439xDgWG8urI2qWBmd4Izw0x1u2G0eOJOJQPKk7j=s85',
  },

  {
    name: 'Butter',
    image:
      'https://lh3.googleusercontent.com/vByQWskDImsi7uWX1V7We4q7lsNJnhrOk7jhvH8HbQhZ2qQvMTReAIAxUjyuYn0OkBtCHFw=s106',
  },

  {
    name: 'Panneer',
    image:
      'https://lh3.googleusercontent.com/aagd6v1PEkWD7aQhKimcvMschq-v4EwxjGf7lr-lhuuhvHtPGGs4OWlzkmjUTjRllEuZ=s148',
  },

  {
    name: 'Dry Fruits',
    image:
      'https://lh3.googleusercontent.com/sj5g1c-RTMtLoo5rk0XaJnOu-RFagoPJspJbJ-2S4bNlcLghgd3HOix0aXsE7ZDga_g1=s95',
  },

  {
    name: 'Vegetables',
    image:
      'https://lh3.googleusercontent.com/QE9321hT2oxBdCGBahzo9wkY8aGDu0eLquTlvtxfwh3u_qt8ziYOTAiUHXTTDlQ_hgvAfA=s85',
  },
  {
    name: 'Fruits',
    image:
      'https://lh3.googleusercontent.com/mrJQV06DMpfIITAMs5ImppJcmtB-_kO-s2UDuD5GiMBydSyxPa44nSQEpf_iaSCEh5Xg=s110',
  },
  {
    name: 'Curd',
    image:
      'https://lh3.googleusercontent.com/pAzU3aC6fNgn1MwxnQo8V1CWj96fPFg1KdZVJgucb4P44GqDV16maD2P72-apAByzcNvRKY=s111',
  },
  {
    name: 'Home care',
    image:
      'https://lh3.googleusercontent.com/qMQ_9CmHHBM8zIDA0M7mwpgsAsrOSlP07s_OkGDXUF7S5Tf2vHhdfrXfgmUplXZpww6BJx8=s104',
  },
  {
    name: 'Organic Items',
    image:
      'https://lh3.googleusercontent.com/NO-5RvXKbeRGghvFK63hMLXKD139EyMkl2OOJdcVdcFdRhalPPzkEcCswfpGUNesEYG2ks0=s97',
  },
  {
    name: 'Pooja items',
    image:
      'https://lh3.googleusercontent.com/9WY-7OVQHDj3ZxX6zvGM9Bl1R1hb9_eVfi-sKL_GQfPWfGvvtoBe4H6vAVYK_Xk-2FH5Vw=s85',
  },
  {
    name: 'Ayurveda',
    image:
      'https://lh3.googleusercontent.com/QE9321hT2oxBdCGBahzo9wkY8aGDu0eLquTlvtxfwh3u_qt8ziYOTAiUHXTTDlQ_hgvAfA=s85',
  },
  {
    name: 'Other organic',
    image:
      'https://lh3.googleusercontent.com/NO-5RvXKbeRGghvFK63hMLXKD139EyMkl2OOJdcVdcFdRhalPPzkEcCswfpGUNesEYG2ks0=s97',
  },
];

const count = 3;
const flex_height = height / count;

const CategoryByName = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('Use Effect Category By Name');
    console.log(
      'Use Effect Category By Name props',
      props.route.params.product_name,
      props.route.params.product_image,
    );
  }, [props, isFocused]);

  return (
    <View style={styles.container}>
      <Appbar navigation={props.navigation} />
      <View style={[styles.box, styles.box1]}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: props.route.params.product_image,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.box2]}>
        <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {props.route.params.product_name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: '70%',
            }}>
            700.0
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
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
                marginHorizontal: 10,
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
        </View>

        <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Product Details
          </Text>
        </View>
        <View style={{margin: 5, marginLeft: 15}}>
          <Text style={{fontSize: 16, color: '#000000'}} numberOfLines={5}>
            Pure & fresh khoya - Free from adulteration!! Rich in calcium
            strengthnig the bones and teeth presence of riboflavin Pure & fresh
            khoya - Free from adulteration!! Rich in calcium strengthnig the
            bones and teeth presence of riboflavin
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('CartScreen')}>
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
              Add to cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={[styles.box, styles.box3]}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    height: flex_height,
    //flexDirection: 'row',
  },
  box1: {
    backgroundColor: '#FFFFFF',
  },
  box2: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    //margin: 20,
  },
  box3: {
    backgroundColor: '#F7F7F7',
  },
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
    /* width: '100%',
    height: '80%', */
    //marginTop: 20,
    width: '100%',
    height: '80%',
  },
});
export default CategoryByName;
