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
    price: 1000,
  },

  {
    name: 'A2 Gir cow khoya (one KG) 1000gm',
    price: 700,
  },
];

const CartScreen = (props) => {
  const isFocused = useIsFocused();
  const [total, setTotal] = useState([]);
  const [totalAmout, setTotalAmount] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    console.log('Use Effect Cart Screen');

    totalAmount();
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

  const totalAmount = async () => {
    {
      cartData.map((item) => {
        console.log('totalAmount', item.price);
        let arr = total;
        arr.push(item.price);
        setTotal(arr);
        console.log('totalAmount Arr', total);
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue;

        total.reduce(reducer);

        console.log('ToTal', total.reduce(reducer));

        let totalAmt = total.reduce(reducer);
        setTotalAmount(totalAmt);

        /* const reducer = (accumulator, currentValue) =>
          accumulator + currentValue;
        console.log('ToTal', item.price.reduce(reducer)); */

        setTotal([]);
      });
    }
  };

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

        {/* {cartData.map((item) => {
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
                        name="pluscircleo"
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
                        name="minuscircleo"
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
        })} */}

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
              <View style={{flexDirection: 'column', margin: 10}}>
                <Text
                  style={{
                    color: '#525253',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={1}>
                  {item.name}
                </Text>
              </View>

              <View style={{flexDirection: 'column', margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="pluscircleo"
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
                    name="minuscircleo"
                    color="#303843"
                    size={18}
                    //style={{marginHorizontal: 15}}
                    onPress={() => console.log('Minus Icon Pressed')}
                  />
                </View>

                <Text
                  style={{
                    color: '#525253',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={1}>
                  Rs {item.price}
                </Text>
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
          <View style={{flexDirection: 'column', margin: 5}}>
            <Text
              style={{
                color: '#525253',
                fontSize: 14,
                fontWeight: 'bold',
              }}
              numberOfLines={1}>
              Subtotal
            </Text>
            <Text
              style={{
                color: '#525253',
                fontSize: 14,
                fontWeight: 'bold',
              }}
              numberOfLines={1}>
              Delivery charge
            </Text>

            <View
              style={{
                flexDirection: 'column',
                borderTopWidth: 2,
                borderColor: '#8B8C8D',
                width: '370%',
                margin: 5,
                marginLeft: -5,
              }}>
              <Text
                style={{
                  color: '#525253',
                  fontSize: 14,
                  fontWeight: 'bold',
                  margin: 5,
                }}
                numberOfLines={1}>
                Total
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'column', margin: 5}}>
            <Text
              style={{
                color: '#525253',
                fontSize: 14,
                fontWeight: 'bold',
              }}
              numberOfLines={1}>
              Rs {totalAmout}
            </Text>

            <Text
              style={{
                color: '#525253',
                fontSize: 14,
                fontWeight: 'bold',
              }}
              numberOfLines={1}>
              00
            </Text>

            <Text
              style={{
                color: '#525253',
                fontSize: 14,
                fontWeight: 'bold',
                margin: 5,
                marginTop: 10,
              }}
              numberOfLines={1}>
              Rs {totalAmout}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => console.log('Place Order Clicked')}>
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
              Place Order
            </Text>
          </View>
        </TouchableOpacity>
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
export default CartScreen;
