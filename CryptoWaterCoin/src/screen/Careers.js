import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Careers = () => {
  const renderItems = () => {
    // Dummy data for the items
    const items = [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ];

    return items.map((item) => (
      <View key={item.id} style={styles.itemContainer}>
        {/* Render the item */}
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        index={1}
        showsPagination
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        style={styles.swiper}
        contentContainerStyle={styles.swiperContentContainer}
        containerStyle={styles.swiperContainer}
      >
        {renderItems()}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperContentContainer: {
    alignItems: 'center',
  },
  swiper: {
    height: 200,
  },
  itemContainer: {
    width: width * 0.8,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 20,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: 4,
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'black',
    margin: 4,
  },
});

export default Careers;
