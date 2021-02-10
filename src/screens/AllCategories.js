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
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },

  {
    name: 'Butter',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },

  {
    name: 'Panneer',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },

  {
    name: 'Dry Fruits',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },

  {
    name: 'Vegetables',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Fruits',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Curd',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Home care',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Organic Items',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Pooja items',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Ayurveda',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
  },
  {
    name: 'Other organic',
    image:
      'https://www.nutripaeds.co.za/wp-content/uploads/2020/09/Milk_800x800-min.png',
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

        {/* <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
            //alignItems: 'center',
            justifyContent: 'center',
            //alignContent: 'center',
            flexWrap: 'wrap',
          }}>
          {homePageData.map((item) => {
            return (
              <View
                style={{
                  flexDirection: 'column',
                  //marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('CategoryByName', {
                      product_name: item.name,
                      product_image: item.image,
                    })
                  }>
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
        </View> */}

        {/* <View
          style={{
            flexDirection: 'row',
            //marginHorizontal: 15,
            //marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {homePageData.map((item) => {
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
                      uri: item.image,
                    }}
                    resizeMode="contain"
                  />
                </Card>
                <Text style={{alignSelf: 'center', color: '#525253'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>;
          })}
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

        {/* 2nd Row */}

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

        {/* 3 row */}

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

        {/* 4 row */}

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
