const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  error: '#FF3636',
  placeholder: 'rgba(255,255,255,0.5)',
  paragraph : 'rgba(255, 255, 255, 0.8)',
  borderColor : 'rgba(255, 255, 255, 0.15)',
  textLink: '#369AF5',
  BgColor: '#061121',
  ternary : '#4A4747',
  dotActiveColor: 'rgba(81, 210, 252, 1)',
  c1 : 'rgba(81, 210, 252, 1)',
  c2 : 'rgba(0, 153, 220, 1)',
  c3 : 'rgba(0, 153, 220, 3)',
  primary: '#7C7777',
};

const FONTSTYLE = {
  normal : 'normal',
  bold : 'bold',
  italic : 'italic',
};

const FONTFAMILY ={
  roboto: 'Roboto-Regular',
  russoOne: 'RussoOne-Regular',
  inter: 'Inter-Regular',
}

const SIZES = {
  small: 11,
  xSmall: 12,
  medium: 14,
  large: 16,
  xLarge: 18,
  xxLarge: 20,
  xxxLarge:30,
  huge: 35,
};
const FLEX = {
  flex: 1,
  flexHalf: 0.5,
};

const IMAGES = {
  coin: require('../images/coin.png'),
  cryptoWater: require('../images/image2.png'),
  background: require('../images/Rectangle11.png'),
  singleCoin: require('../images/singleCoin.png'),
  tShirt: require('../images/tshirt.png'),
  waterBottle: require('../images/waterBottle.png'),
  waterBottleCard: require('../images/waterBottleCard.png'),
  frame : require('../images/Frame.png'),
  backImage : require('../images/backImage.png'),
  coins : require('../images/coins.png'),
  bottal : require('../images/cardBottal.png'),
  tshirtCard : require('../images/tshirtCard.png'),
};

const ICON = {
  developer: require('../images/icons/developer.png'),
  earn: require('../images/icons/earn.png'),
  product: require('../images/icons/Product.png'),
  purchase: require('../images/icons/purchase.png'),
  redeemHome: require('../images/icons/Redeemhome.png'),
  scan: require('../images/icons/scan.png'),
  wallet: require('../images/icons/Wallet.png'),
  email: require('../images/icons/email.png'),
  lock: require('../images/icons/lock.png'),
  eye: require('../images/icons/eye.png'),
  backArrow: require('../images/icons/backBtn.png'),
  menu: require('../images/icons/menu.png'),
  profile: require('../images/icons/profiles.png'),
  redeem: require('../images/icons/redeem.png'),
  blockchain: require('../images/icons/blockchain.png'),
};

const FONTWEIGHT = {
  small: 400,
  medium: 600,
  large: 700,
};

const SHADOW = {
  inputShadow: {
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 2,
  },
  shadowBox: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: 7,
    },
    shadowRadius: 11,
    shadowOpacity: 0.19,
  },
};




export {COLORS, FONTSTYLE, IMAGES, ICON, FONTWEIGHT, SHADOW, SIZES, FLEX, FONTFAMILY};
