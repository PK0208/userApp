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
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {}, [props, isFocused]);

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
        <View style={{marginTop: 5}}>
          <Image
            style={{width: '100%', height: 130}}
            source={{
              uri:
                'https://lh3.googleusercontent.com/nchOYzxdkZdBOK7nym2S0rjsmLeysJ7FIQOy51lLX15XgSMYP4-HR2aMY_gfurmWwMkh=s170',
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
          <Text style={{color: '#4B4A4A', fontSize: 20, fontWeight: 'bold'}}>
            Flash Sale
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                margin: 15,
              }}>
              <Image
                style={{width: '20%', height: 50}}
                /* source={{
                  uri:
                    'https://lh3.googleusercontent.com/aJgssuF_wB5wRpHTulaHUEKG0cdcTIbIMsJRmWmzeMHFjW0hm5TULjFIdHAOx12ulH_kdw=s80',
                }} */
                source={require('../assets/images/new_ghee.jpg')}
                resizeMode="contain"
              />

              <Text style={{color: '#525253', fontSize: 16, fontWeight: '400'}}>
                Ghee 250ml
              </Text>
              <View style={{marginHorizontal: '30%', flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
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
                      fontSize: 15,
                      fontWeight: '200',
                      marginHorizontal: 10,
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
                <View>
                  <Text
                    style={{
                      color: '#525253',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}></Text>
                </View>
                <Text
                  style={{color: '#525253', fontSize: 14, fontWeight: 'bold'}}>
                  Rs 500
                </Text>
              </View>
            </View>
          </Card>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginLeft: 15}}>
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
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* producsts list starts */}

        <View
          style={{
            flexDirection: 'row',
            //marginHorizontal: 15,
            //marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={{
                    uri:
                      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
                  }}
                  resizeMode="contain"
                />

                {/* <Icon name="bike" color="black" style={styles.imageContainer} /> */}
              </Card>
              <Text style={{alignSelf: 'center', color: '#525253'}}>
                A2 Milk
              </Text>
            </TouchableOpacity>
          </View>

          {/* One */}

          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => console.log('POS Printer')}
              activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/oil_ghee.jpg')}
                  resizeMode="contain"
                />
                {/* <Icon name="bike" color="black" style={styles.imageContainer} /> */}
              </Card>
              <Text style={{alignSelf: 'center', color: '#525253'}}>
                Oil & Ghee
              </Text>
            </TouchableOpacity>
          </View>

          {/* two */}

          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => console.log('Print Out')}
              activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/new_butter.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={{alignSelf: 'center', color: '#525253'}}>
                Butter
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            //marginHorizontal: 15,
            //marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/new_panner.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={{alignSelf: 'center', color: '#525253'}}>
                Panneer
              </Text>
            </TouchableOpacity>
          </View>

          {/* One */}

          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => console.log('POS Printer')}
              activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/new_dryfruits.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={{alignSelf: 'center'}}>Dry fruits</Text>
            </TouchableOpacity>
          </View>

          {/* two */}

          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => console.log('Print Out')}
              activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/leaf_vegetables.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={{alignSelf: 'center'}}>Vegetables</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  products list ends*/}

        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'flex-start', marginLeft: 15}}>
            <Text style={{color: '#4B4A4A', fontWeight: 'bold', fontSize: 20}}>
              New Arrivals
            </Text>
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            //marginHorizontal: 15,
            //marginVertical: 15,
            //alignItems: 'center',
            //justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: 30,
            }}>
            <TouchableOpacity onPress={() => console.log('Print Out')}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/new_poojaitems.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={{alignSelf: 'center', color: '#525253'}}>
                Pooja Items
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            //marginHorizontal: 15,
            //marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              //marginHorizontal: 10,
            }}>
            <TouchableOpacity activeOpacity={1}>
              <Card style={styles.cardContainer}>
                <Image
                  style={styles.imageContainer}
                  source={require('../assets/images/new_poojaitems.jpg')}
                  resizeMode="contain"
                />
              </Card>
              <Text style={{alignSelf: 'center', color: '#525253'}}>
                Pooja Items
              </Text>
            </TouchableOpacity>
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
    height: 120,
    borderRadius: 10,
    alignItems: 'center',
    //margin: 15,
    backgroundColor: '#9AD9F7',
  },
  imageContainer: {
    width: 80,
    height: 100,
    margin: 10,
  },
});
export default Home;
