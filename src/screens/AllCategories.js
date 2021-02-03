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

const AllCategories = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%', backgroundColor: '#F7F7F7'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <ScrollView>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            {/* <Image
            style={[styles.icon, styles.inputIcon]}
            source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}
          /> */}
            <Icon
              name="search1"
              color="black"
              size={25}
              style={{marginHorizontal: 15}}
              //onPress={() => props.navigation.navigate('Home')}
            />
            <TextInput
              style={styles.inputs}
              //ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid="transparent"
              //onChangeText={(name_address) => this.setState({name_address})}
            />
          </View>
        </View>

        <View>
          <View style={{flexDirection: 'row', marginLeft: 15}}>
            <Text style={{color: '#4B4A4A', fontWeight: 'bold', fontSize: 20}}>
              Categories
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}>
          {homePageData.map((item) => {
            return (
              <View
                style={{
                  flexDirection: 'column',
                  //marginHorizontal: 10,
                }}>
                <TouchableOpacity onPress={() => console.log('All Categories')}>
                  <Card style={styles.cardContainer}>
                    <Image
                      style={styles.imageContainer}
                      source={{
                        uri: item.image,
                      }}
                      resizeMode="contain"
                    />
                  </Card>
                  <Text style={{alignSelf: 'center', color: '#525253'}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
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
export default AllCategories;
