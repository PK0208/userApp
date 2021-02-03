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
import {Calendar} from 'react-native-calendars';

const {height, width} = Dimensions.get('window');
const Calender = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <View style={{height: '100%', backgroundColor: '#F7F7F7'}}>
      <Appbar navigation={props.navigation} />
      {/* <ImageSlider /> */}
      <ScrollView>
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

        <View
          style={{
            //justifyContent: 'center',
            //alignItems: 'center',
            //borderRadius: 20,
            //borderWidth: 1,
            margin: 10,
          }}>
          <Calendar
            // Specify style for calendar container element. Default = {}
            style={{
              borderWidth: 1,
              borderColor: '#FFFFFF',
              height: 350,
              borderRadius: 20,
              //width: '80%',
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.imageContainer}
            source={{
              uri:
                'https://lh3.googleusercontent.com/8y-jkL3B8SJwc0NmyAP8rBFSF-F5yw9gbqe56akwV6izWnP-BuJc6o-sG5SEN3sLU9iIWw=s84 ',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            No Orders Scheduled
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            numberOfLines={2}
            style={{color: '#5C5C5C', fontSize: 18, textAlign: 'center'}}>
            Look’s like you haven’t ordered anything for this day
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            width: width * 0.34666666666,
            alignSelf: 'center',
            margin: 10,
            borderRadius: 25,
            backgroundColor: '#4FDD5F',
            borderColor: '#4FDD5F',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllCategories')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold',
                margin: 10,
              }}>
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
export default Calender;
