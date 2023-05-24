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
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {
  COLORS,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
  ICON,
  IMAGES,
  SHADOW,
} from '../../assets/thems';
import Btn from '../../components/button/Btn';
import {SIZES} from '../../assets/thems';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');

const Card = ({logo, name, text}) => {
  return (
    <View style={styles.__cardContainer}>
      <View style={styles.__cardContent}>
        <View style={styles.__logoContainer}>
          <View style={styles.__logobox}>
            <Image source={logo} style={styles.__logo} resizeMode='contain' />
          </View>
          <Text style={styles.__logoName}>{name}</Text>
        </View>
        <Text style={styles.__cardText}>{text}</Text>
      </View>
    </View>
  );
};

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
      id: 4,
      title: 'Water Bottle',
      image: require('../../images/cardBottal.png'),
    },
    {id: 5, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 6, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 7, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 8, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 9, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 10, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 11, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
    {id: 12, title: 'T-Shirt', image: require('../../images/tshirtCard.png')},
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
          {cards.slice(0, 10).map(card => (
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
      }}>
      {/* ***************************** Profile ******************************* */}
      <View
        style={{
          width: '100%',
          zIndex: 1,
          paddingHorizontal: 20,
          marginBottom: 10,
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
      </View>
      {/* ***************************** Scroll Items ******************************* */}
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: height * 0.27,
            marginTop: 10,
            borderRadius: 10,
            paddingHorizontal: 20,
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
              paddingHorizontal: 40,
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
        {/* **************************** Follow The Steps And Earn The Drop Coin *************************** */}
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
        {/* **************************** Cards *************************** */}
        <View style={styles.__container}>
          <View style={styles.__cardRow}>
            <Card
              logo={require('../../images/icons/scan.png')}
              name="Scan"
              text="Barcode on CryptoWater bottle lable"
            />
            <Card
              logo={require('../../images/icons/purchase.png')}
              name="Purchase"
              text="Or play games on the crypto water website to win more."
            />
          </View>
          <View style={styles.__cardRow}>
            <Card
              logo={require('../../images/icons/blockchain.png')}
              name="Blockchain"
              text="All on the dropcoin blockchain"
            />
            <Card
              logo={require('../../images/icons/developer.png')}
              name="Developers"
              text="Can create nodes, tokens or nft tokens on dropcoin"
            />
          </View>
          <View style={styles.__cardRow}>
            <Card
              logo={require('../../images/icons/redeem.png')}
              name="Redeem"
              text="Five Dropcoins by entering code found in bottle cap."
            />
            <Card
              logo={require('../../images/icons/earn.png')}
              name="Earn"
              text="Dropcoin by"
            />
          </View>
        </View>
        {/* **************************** View All *************************** */}

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: height * 0.03,
            paddingHorizontal: 20,
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
            paddingHorizontal: 20,
            marginHorizontal: 20,
            flexDirection: 'row',
            borderRadius: 10,
            columnGap: 10,
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <View
            style={{
              width: '60%',
              rowGap: 10,
            }}>
            <Text style={styles.exchange}>Exchange for drop coin</Text>
            <Text style={styles.exchangeText}>
              Bring your empty bottles in exchange for drop coin
            </Text>
            <TouchableOpacity style={styles.Btn}>
              <Text style={styles.exchangeBtn}>Exchange Now</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '40%',
            }}>
            <Image
              source={IMAGES.singleCoin}
              resizeMode="cover"
              style={{
                // height:'40%',
                width: '100%',
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
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
  exchange: {
    color: COLORS.white,
    fontSize: SIZES.xLarge,
    fontFamily: FONTFAMILY.russoOne,
  },
  exchangeText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONTFAMILY.roboto,
  },
  exchangeBtn: {
    color: COLORS.black,
    fontFamily: FONTFAMILY.roboto,
    fontWeight: FONTWEIGHT.large,
  },
  Btn: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '70%',
  },

  // **************

  __container: {
    width: '100%',
    padding: 20,
  },
  __cardRow: {
    flexDirection: 'row',
    marginBottom: 10,
    columnGap: 15,
  },
  __cardContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    // columnGap: 5,
    // overflow: 'hidden',
  },
  __cardContent: {
    padding: 15,
  },
  __logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    columnGap: 10,
  },
  __logobox:{
    width: 30,
    height: 30,
    backgroundColor:COLORS.white,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:20,
  },
  __logo: {
    // width: 24,
    // height: 24,
    // marginRight: 8,
  },
  __logoName: {
    marginTop: -10,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    fontFamily: FONTFAMILY.roboto,
    fontStyle: FONTSTYLE.normal,
  },
  __cardText: {
    fontSize: SIZES.xSmall,
    color: COLORS.paragraph,
  },
});
