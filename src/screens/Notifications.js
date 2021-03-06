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
const Notifications = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%'}}>
      <Appbar navigation={props.navigation} />
      <View style={{alignItems: 'center', marginVertical: 7}}>
        <View style={{marginTop: '50%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/QN6sM2HbGIpzakDa3vjC4Qo7cudTiQbOJSVlQ0psCdCkoumPhJMzjTzRz8yjeEDkP-e5Kw=s93',
              }}
              resizeMode="contain"
            /> */}

            <Image
              style={styles.imageContainer}
              source={require('../assets/images/new_no_notifications.png')}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Nothing in here right now !
            </Text>
            <Text style={{fontSize: 18, color: '#757575'}}>
              We’ll let you know when we have
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
export default Notifications;
