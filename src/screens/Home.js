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

import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #f7f7f7;
`;

const {height, width} = Dimensions.get('window');

const Home = (props) => {
  const isFocused = useIsFocused();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log('Home Screen useEffect');
  }, [props, isFocused]);

  const increaseQuantity = () => {
    let tempValue = parseInt(quantity);
    tempValue++;
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
  };

  return (
    <Container>
      <Appbar navigation={props.navigation} />
      <View style={{flex: 1, marginBottom: 70}}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Icon
              name="search1"
              color="black"
              size={25}
              style={{marginHorizontal: 15}}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Search"
              underlineColorAndroid="transparent"
              //onChangeText={(name_address) => this.setState({name_address})}
            />
          </View>
        </View>

        <Image
          style={styles.bannerImage}
          source={require('../assets/images/Homepage.jpg')}
          resizeMode="cover"
        />

        <Text
          style={{
            margin: 5,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#4B4A4A',
          }}>
          Flash Sale
        </Text>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                margin: 15,
              }}>
              <Image
                style={{width: '20%', height: 65}}
                source={require('../assets/images/new_ghee.jpg')}
                resizeMode="contain"
              />

              <Text
                style={{
                  color: '#525253',
                  fontSize: 16,
                  fontWeight: '400',
                  fontFamily: 'ARLRDBD',
                }}>
                Ghee 250ml
              </Text>
              <View
                style={{
                  marginHorizontal: '30%',
                  flexDirection: 'column',
                }}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View>
                    <Icon
                      name="minuscircleo"
                      color="#303843"
                      size={18}
                      style={{flex: 1}}
                      onPress={() => decreaseQuantity()}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#525253',
                        fontSize: 13,
                        fontWeight: '200',
                        //marginHorizontal: 10,
                        fontFamily: 'Dosis-Medium',
                        paddingHorizontal: 5,
                        flex: 1,
                      }}
                      numberOfLines={1}>
                      {quantity}
                    </Text>
                  </View>

                  <View>
                    <Icon
                      name="pluscircleo"
                      color="#303843"
                      size={18}
                      style={{flex: 1}}
                      onPress={() => increaseQuantity()}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#525253',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}></Text>
                </View>
                <Text
                  style={{
                    color: '#525253',
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontFamily: 'ARLRDBD',
                  }}>
                  Rs 500
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 13, marginTop: 18}}>
          <Text style={{color: '#4B4A4A', fontWeight: 'bold', fontSize: 20}}>
            Categories
          </Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllCategories')}>
            <Text
              style={{
                color: '#7373E0',
                justifyContent: 'flex-end',
                marginLeft: '65%',
                marginTop: 5,
                fontFamily: 'arial-bold',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        {/* product list starts */}
        <View style={styles.productView}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                props.navigation.navigate('CategoryByName', {
                  product_name: 'Panneer',
                  product_image: '../assets/images/new_panner.jpg',
                })
              }>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/A2Milk.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>A2 Milk</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/oilGheeNew.jpg')}
                  //resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>Oil & Ghee</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/butterNew.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>Butter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productView}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/pannerNew.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>Panner</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/dryFruitsNew.jpg')}
                  //resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>Dry Fruits</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/vegetablesNew.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>Vegetables</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  product list ends*/}

        <View style={{flexDirection: 'row', marginLeft: 13, marginTop: 18}}>
          <Text style={{color: '#4B4A4A', fontWeight: 'bold', fontSize: 20}}>
            New Arrivals
          </Text>
        </View>

        <View style={styles.productView}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/poojaNew.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={styles.categoryText}>Pooja Items</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
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
  bannerImage: {
    width: '100%',
    height: height * 0.18435251798,
  },
  cardStyle: {
    width: width * 0.85285333333,
    borderRadius: 8,
  },
  productView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardContainer: {
    //width: 110,
    //height: 80,
    width: width * 0.288,
    height: width * 0.288,
    borderRadius: 25,
    alignItems: 'center',
    //margin: 15,
    backgroundColor: '#9AD9F7',
  },
  imageContainer: {
    width: width * 0.248,
    height: width * 0.248,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 25,
  },
  categoryText: {
    alignSelf: 'center',
    color: '#525253',
    fontFamily: 'arial-bold',
    fontSize: 13,
  },
});
export default Home;
