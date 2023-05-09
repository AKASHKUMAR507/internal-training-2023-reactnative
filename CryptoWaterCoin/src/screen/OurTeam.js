import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  COLORS,
  FLEX,
  FONTFAMILY,
  FONTSTYLE,
  ICON,
  IMAGES,
  SIZES,
} from '../assets/thems';
import BackBtn from '../components/button/BackBtn';
const {height, width} = Dimensions.get('screen');

const OurTeam = ({navigation}) => {
  return (
    <ScrollView
      style={{
        flex: FLEX.flex,
      }}>
      <Image source={IMAGES.backImage} resizeMode="contain" />
      <SafeAreaView
        style={{
          position: 'absolute',
          zIndex: 1,
          flex: 1,
          paddingHorizontal: height * 0.03,
        }}>
        {/* <TouchableOpacity
          style={{
            width: height * 0.04,
            position: 'absolute',
            marginLeft: height * 0.03,
            marginTop: height * 0.02,
          }}>
        </TouchableOpacity> */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: height * 0.02,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            columnGap: SIZES.xxLarge + SIZES.small,
          }}>
          <View style={{}}>
            <BackBtn Press={() => navigation.navigate('SignUpScreen')} />
          </View>
          <Text
            style={{
              fontSize: SIZES.xxLarge,
              color: COLORS.white,
              fontFamily: FONTFAMILY.russoOne,
              textAlign: 'center',
            }}>
            Terms & Conditions
          </Text>
        </View>
        <View
          style={{
            marginTop: height * 0.025,
          }}>
          <Text
            style={{
              color: COLORS.placeholder,
              fontStyle: FONTSTYLE.normal,
              fontFamily: FONTFAMILY.roboto,
            }}>
            Lorem ipsum dolor sit amet consectetur. Elit ut risus sed sem
            faucibus lorem. Facilisi a id odio volutpat viverra turpis nascetur.
            Adipiscing est euismod condimentum accumsan massa mauris. Dolor
            felis proin nec nulla est vestibulum tincidunt adipiscing. Est sed
            rhoncus velit aliquet turpis lectus pharetra ipsum. Nunc lacus nisl
            a sit suspendisse donec placerat varius. Velit suspendisse iaculis
            eu risus sed semper ac eu. At maecenas vestibulum erat orci in
            quisque mauris dictum. Consectetur curabitur dolor malesuada
            commodo. Nunc adipiscing dignissim volutpat massa amet risus. Sit
            pellentesque massa proin erat massa. Orci lacus nisl dolor nullam.
            Neque nullam maecenas morbi in arcu. Augue morbi ut viverra
            pellentesque libero enim ac. Tellus etiam auctor mauris elit
            elementum sollicitudin ut. Sapien dictum velit ut tempor lectus
            tempor turpis. Vitae malesuada pretium a nibh massa fringilla
            viverra platea ipsum. Dui potenti pulvinar ultrices tincidunt quis
            in ac eget nibh. Vitae quam laoreet in magna etiam dui. Pretium leo
            sit magna nunc aliquam et in viverra. Dictumst orci elit duis netus
            sit sed nulla eu leo. Integer lacus a aliquet aliquam. Morbi vitae
            tempus volutpat morbi arcu in et vel. Tempor sem viverra ornare nisl
            quisque fermentum. Condimentum ultrices ac elit adipiscing risus
            molestie fringilla facilisi. Nec posuere vitae ut nulla massa
            tristique mattis semper sit. Tellus in phasellus nisl malesuada
            condimentum. Non lorem nunc nibh nulla quis. Diam eu sed quis id in.
            pellentesque libero enim ac. Tellus etiam auctor mauris elit
            elementum sollicitudin ut. Sapien dictum velit ut tempor lectus
            tempor turpis. Vitae malesuada pretium a nibh massa fringilla
            viverra platea ipsum. Dui potenti pulvinar ultrices tincidunt quis
            in ac eget nibh. Vitae quam laoreet in magna etiam dui. Pretium leo
            sit magna nunc aliquam et in viverra. Dictumst orci elit duis netus
            sit sed nulla eu leo. Integer lacus a aliquet aliquam. Morbi vitae
            condimentum. Non lorem nunc nibh nulla quis. Diam eu sed quis id in.
            Ac id dictum neque ullamcorper. Sed hendrerit arcu pretium nam
            varius. Neque nunc nibh eu consectetur. Id sapien dui feugiat odio
            eget aliquam. Scelerisque massa enim tempor ut risus vel. Eget
            porttitor placerat eu et. Condimentum eget orci volutpat ut morbi
            sed ut duis enim. Cras libero in odio quam at consequat aliquam.
            Fames sollicitudin magna porttitor arcu tristique. Amet integer
            tellus metus libero diam dignissim in eget senectus.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OurTeam;

const styles = StyleSheet.create({});
