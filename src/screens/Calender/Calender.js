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

import styled from 'styled-components/native';
const {height, width} = Dimensions.get('window');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #f7f7f7;
`;

const Calender = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <Container>
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Subscriptions')}>
            <Text
              style={{
                color: '#4C82E8',
                fontSize: 13,
                fontWeight: 'bold',
                margin: 8,
                fontFamily: 'ARLRDBD',
              }}>
              My Subscriptions
            </Text>
          </TouchableOpacity>
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
            source={require('../../assets/images/new_no_orders.jpg')}
            resizeMode="contain"
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'ARLRDBD'}}>
            No Orders Scheduled
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: '#5C5C5C',
              fontSize: 18,
              textAlign: 'center',
              fontFamily: 'Avenir Book',
            }}>
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
            marginBottom: 90,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllCategories')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold',
                margin: 5,
                fontFamily: 'Avenir Black',
              }}>
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
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
