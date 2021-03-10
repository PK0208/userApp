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

const count = 3;
const flex_height = height / count;

const CategoryByName = (props) => {
  const isFocused = useIsFocused();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log('Use Effect Category By Name');
    console.log(
      'Use Effect Category By Name props',
      props.route.params.product_name,
      props.route.params.product_image,
    );
  }, [props, isFocused]);

  const increaseQuantity = () => {
    let tempValue = parseInt(quantity);
    //let tempAmount = parseFloat(total);
    tempValue++;
    //tempAmount = price * tempValue;
    /* setTotal(tempAmount);
    setTempState(1);
    setQuantity(tempValue); */
    console.log('Increase', tempValue);
    setQuantity(tempValue);
    console.log('Increase quantity', quantity);
  };
  const decreaseQuantity = () => {
    let tempValue = parseInt(quantity);
    if (tempValue > 1) {
      tempValue--;
    } else {
      tempValue = 1;
    }

    console.log('decrease', tempValue);
    setQuantity(tempValue);
    console.log('decrease quantity', quantity);
    /* let tempAmount = parseFloat(total);
    if (tempValue <= parseInt(min)) {
      tempValue = parseFloat(min);
    } else {
      tempValue--;
    }
    setTempState(1);
    tempAmount = price * tempValue;
    setTotal(tempAmount);
    setQuantity(tempValue); */
  };

  return (
    <View style={styles.container}>
      <Appbar navigation={props.navigation} />
      <View style={[styles.box, styles.box1]}>
        <Image
          style={styles.imageContainer}
          source={require('../assets/images/pannerNewBg.jpg')}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.box2]}>
        <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Avenir Black',
            }}>
            {props.route.params.product_name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: '70%',
              fontFamily: 'ARLRDBD',
              marginRight: -15,
            }}
            numberOfLines={1}>
            ₹ 700.0
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
            <Icon
              name="pluscircleo"
              color="#303843"
              size={18}
              //style={{marginHorizontal: 15}}
              onPress={() => increaseQuantity()}
            />
            <Text
              style={{
                color: '#525253',
                fontSize: 13,
                fontWeight: '200',
                marginHorizontal: 10,
                fontFamily: 'Dosis-Medium',
              }}>
              {quantity}
            </Text>

            <Icon
              name="minuscircleo"
              color="#303843"
              size={18}
              //style={{marginHorizontal: 15}}
              onPress={() => decreaseQuantity()}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 15, margin: 5}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Avenir Black',
            }}>
            Product Details
          </Text>
        </View>
        <View style={{margin: 5, marginLeft: 15, fontFamily: 'Avenir Light'}}>
          <Text style={{fontSize: 12, color: '#000000'}} numberOfLines={5}>
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
                fontSize: 20,
                fontWeight: 'bold',
                margin: 5,
                color: '#FFFFFF',
                fontFamily: 'Avenir Black',
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
    backgroundColor: '#F7F7F7',
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
