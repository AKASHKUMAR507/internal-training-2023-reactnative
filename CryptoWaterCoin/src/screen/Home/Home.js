// Prabhash sir
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSTYLE, ICON, IMAGES} from '../../assets/thems';
import Btn from '../../components/button/Btn';
import {SIZES} from '../../assets/thems';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');

const Home = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const cards = [
    {id: 1, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {
      id: 2,
      title: 'Water Bottle',
      image: require('../../images/cardBottal.png'),
    },
    {id: 3, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {
      id: 2,
      title: 'Water Bottle',
      image: require('../../images/cardBottal.png'),
    },
    {id: 3, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
  ];

  const renderCards = () => {
    if (showAllCards) {
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
    <SafeAreaView
      style={{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: COLORS.white,
      }}>
      <Image
        source={IMAGES.backImage}
        style={{
          height: '100%',
          width: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      {/* *************************************************************************** */}
      <View
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 1,
          paddingHorizontal: 20,
        }}>
        {/* **************************** Menu & Profiles *************************** */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: COLORS.white,
            alignItems: 'center',
            marginTop: height * 0.015,
          }}>
          {/* **************************** Menu *************************** */}
          <View>
            <TouchableOpacity>
              <Image source={ICON.menu} />
            </TouchableOpacity>
          </View>
          {/* **************************** Profiles *************************** */}
          <View>
            <TouchableOpacity>
              <Image source={ICON.profile} />
            </TouchableOpacity>
          </View>
        </View>
        {/* **************************** About *************************** */}
        <ScrollView >
          <View
            style={{
              width: '100%',
              height: height * 0.27,
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Image
              source={IMAGES.background}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                paddingHorizontal: 20,
                rowGap: 5,
                paddingVertical: 30,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.xxxLarge,
                  fontFamily: FONTFAMILY.russoOne,
                  fontStyle: FONTSTYLE.normal,
                }}>
                Crypto Water
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.large,
                  fontFamily: FONTFAMILY.roboto,
                  fontStyle: FONTSTYLE.normal,
                  width: width * 0.6,
                }}>
                Earn DropCoin when drinking Crypto Water.
              </Text>
              <TouchableOpacity
                //  onPress={''}
                style={{
                  height: height * 0.067,
                  width: '80%',
                  borderRadius: SIZES.xxxLarge + 65,
                  marginTop: 25,
                }}>
                <LinearGradient
                  style={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: SIZES.small,
                  }}
                  colors={[COLORS.c1, COLORS.c2]}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZES.xLarge,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: FONTFAMILY.roboto,
                      fontStyle: FONTSTYLE.normal,
                    }}>
                    Learn More
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          {/* **************************** Others *************************** */}
          <View
            style={{
              width: '100%',
              paddingHorizontal: 15,
              marginTop: height * 0.03,
            }}>
            <Text
              style={{
                fontSize: SIZES.xxLarge,
                color: COLORS.white,
                fontFamily: FONTFAMILY.russoOne,
                textAlign: 'center',
              }}>
              Follow The Steps And Earn The Drop Coin
            </Text>
          </View>
          {/* **************************** Others *************************** */}

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
          {/* **************************** Others *************************** */}
          <View
            style={{
              backgroundColor: '#061A56',
            }}>
              <View>
                <Text>Exchange for drop coin</Text>
                <Text>Bring your empty bottles in exchange for drop coin</Text>
                <TouchableOpacity>
                  <Text>Exchange Now</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image source={IMAGES.singleCoin} />
              </View>
            </View>
        </ScrollView>
        {/* *************************************************************************** */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    height: 210,
    alignSelf: 'stretch',
    width: '100%',
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
    // width: ,
    height: 130,
    marginBottom: 8,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
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
