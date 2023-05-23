import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  COLORS,
  IMAGES,
  SIZES,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
} from '../assets/thems';
import BackBtn from '../components/button/BackBtn';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Btn from '../components/button/Btn';

const {height, width} = Dimensions.get('screen');

const Merchandise = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const cards = [
    {id: 1, title: 'T-Shirt', image: require('../images/tshirtCard.png')},
    {id: 2, title: 'Water Bottle', image: require('../images/cardBottal.png')},
    {id: 3, title: 'T-Shirt', image: require('../images/tshirtCard.png')},
    {id: 2, title: 'Water Bottle', image: require('../images/cardBottal.png')},
    {id: 3, title: 'T-Shirt', image: require('../images/tshirtCard.png')},
  ];

  const renderCards = () => {
    if (showAllCards) {
      return (
        <ScrollView horizontal>
          {cards.map(card => (
            <View key={card.id} style={styles.card}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                }}>
                <Image source={card.image} style={styles.cardImage} />
              </View>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView horizontal>
          {cards.slice(0, 2).map(card => (
            <View key={card.id} style={styles.card}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                }}>
                <Image source={card.image} style={styles.cardImage} />
              </View>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <ImageBackground
      source={IMAGES.backImage}
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.015,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          columnGap: width * 0.2,
          alignItems: 'center',
        }}>
        <View style={{}}>
          <BackBtn Press={() => navigation.navigate('')} />
        </View>
        <Text
          style={{
            fontSize: SIZES.xxLarge,
            color: COLORS.white,
            fontFamily: FONTFAMILY.russoOne,
            textAlign: 'center',
          }}>
          Merchandise
        </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            marginTop: height * 0.015,
            rowGap: 5,
          }}>
          <Text style={[styles.h1]}>
            Method Of Purchasing By Credit Card And Dropcoin
          </Text>
          <Text style={styles.h2}>
            {' '}
            <Text style={styles.navH2}>FIAT/PAYMENT </Text> Channels Available
          </Text>
        </View>

        <Swiper
          showsButtons={false}
          loop={false}
          dotStyle={{}}
          dotColor={COLORS.ternary}
          activeDotStyle={{}}
          activeDotColor={COLORS.dotActiveColor}
          style={{
            height: height * 0.37,
            marginTop: height * 0.025,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.c1,
              borderRadius: SIZES.small,
              rowGap: 20,
              paddingTop:30,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={IMAGES.coins} resizeMode="contain" />
            </View>
            <TouchableOpacity
              // onPress={Press}
              style={{
                height: height * 0.05,
                width: '100%',
                borderBottomLeftRadius: SIZES.small,
                borderBottomRightRadius: SIZES.small,
              }}>
              <LinearGradient
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: SIZES.small,
                  borderBottomRightRadius: SIZES.small,
                }}
                colors={[COLORS.c1, COLORS.c2]}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.large,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: FONTFAMILY.roboto,
                    fontStyle: FONTSTYLE.normal,
                  }}>
                  Card Payment Deposit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.c1,
              borderRadius: SIZES.small,
              rowGap: 20,
              paddingTop:30,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '80%',
              }}>
              <Image source={IMAGES.coins} resizeMode="contain" />
            </View>
            <TouchableOpacity
              // onPress={Press}
              style={{
                height: height * 0.05,
                width: '100%',
                borderBottomLeftRadius: SIZES.small,
                borderBottomRightRadius: SIZES.small,
              }}>
              <LinearGradient
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: SIZES.small,
                  borderBottomRightRadius: SIZES.small,
                }}
                colors={[COLORS.c1, COLORS.c2]}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.large,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: FONTFAMILY.roboto,
                    fontStyle: FONTSTYLE.normal,
                  }}>
                  Card Payment Deposit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.c1,
              borderRadius: SIZES.small,
              rowGap: 20,
              paddingTop:30,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '80%',
              }}>
              <Image source={IMAGES.coins} resizeMode="contain" />
            </View>
            <TouchableOpacity
              // onPress={Press}
              style={{
                height: height * 0.05,
                width: '100%',
                borderBottomLeftRadius: SIZES.small,
                borderBottomRightRadius: SIZES.small,
              }}>
              <LinearGradient
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: SIZES.small,
                  borderBottomRightRadius: SIZES.small,
                }}
                colors={[COLORS.c1, COLORS.c2]}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.large,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: FONTFAMILY.roboto,
                    fontStyle: FONTSTYLE.normal,
                  }}>
                  Card Payment Deposit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Swiper>

        <View
          style={{
            width: '100%',
            paddingHorizontal: 10,
          }}>
          <Text style={[styles.text]}>
            Show off your love for Crypto Water with our exclusive merchandize
            Looking for the perfect way to show off your love for Web3 and
            Crypto Water? Look no further than our selection of Crypto Water
            merchandise! All our merchandise is manufactured from recycled ocean
            plastic. Our collection features a wide range of items including
            t-shirts, mugs, hats, keychains, and bottle openers that remind you
            and your loved ones to stay hydrated. Plus, our sippers and bottles
            make it easy to track your water intake levels throughout the day
            Crypto Water merchandize makes for great gifts for the
            environmentalists, health nuts and crypto lovers in your life. Own a
            piece of the Crypto Water movement - grab your favorite Crypto Water
            merchandise today!
          </Text>
        </View>

        <View
          style={{
            marginTop: height * 0.03,
          }}>
          <Btn title={'Contact Us'} />
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: height * 0.03,
            marginBottom: height * 0.03,
          }}>
          <Text
            style={{
              fontSize: SIZES.large,
              color: COLORS.white,
              fontFamily: FONTFAMILY.russoOne,
            }}>
            Buy Merchandise With Drop Coin
          </Text>
          <Text
            style={{
              color: COLORS.c1,
            }}
            onPress={() => setShowAllCards(!showAllCards)}>
            View All
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.cardContainer}>{renderCards()}</View>
          {/* {!showAllCards && (
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => setShowAllCards(true)} >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          )} */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Merchandise;

const styles = StyleSheet.create({
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: FONTFAMILY.roboto,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
  h1: {
    color: COLORS.white,
    fontFamily: FONTFAMILY.roboto,
    fontSize: SIZES.medium,
    fontWeight: FONTWEIGHT.large,
    textAlign: 'center',
  },
  h2: {
    color: COLORS.white,
    fontFamily: FONTFAMILY.roboto,
    fontSize: SIZES.medium,
    fontWeight: FONTWEIGHT.medium,
    textAlign: 'center',
  },
  navH2: {
    color: COLORS.c1,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardContainer: {
    height: 290,
    alignSelf: 'stretch',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 16,
    padding: 16,
    minWidth: 200,
    rowGap: 10,
  },
  cardImage: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONTFAMILY.roboto,
    fontStyle: FONTSTYLE.normal,
  },
  viewAllButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 4,
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
