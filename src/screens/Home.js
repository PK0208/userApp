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
const Home = (props) => {
  const isFocused = useIsFocused();
  
  useEffect(() => {
    
  }, [props, isFocused]);

  

  return (
    <View style={{height:'100%', backgroundColor: '#F7F7F7'}}>
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

      <View style={{marginTop: 5}}>
            <Image
              style={{width: '100%',
                height: 130,
               }}
               source={{
                uri:
                  'https://lh3.googleusercontent.com/8YrkjpwZwI7XXdZ5s9mFi_J94SVWmqtxlcrsKh0txtTE-4R2VDYZVbmJ_AtUCpBH4I3P=s152',
              }}
              resizeMode="cover"

              
            />
            
           
          </View>
      
      <View style={{alignItems: 'center', marginVertical: 7}}>

        

        
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formContent: {
    flexDirection: 'row',
    marginTop: 20,
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
});
export default Home;
