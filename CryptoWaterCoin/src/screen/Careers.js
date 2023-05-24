import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ logo, name, text }) => {
  return (
    <View style={styles.__cardContainer}>
      <View style={styles.__cardContent}>
        <View style={styles.__logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.__logoName}>{name}</Text>
        </View>
        <Text style={styles.__cardText}>{text}</Text>
      </View>
    </View>
  );
};

const Careers = () => {
  return (
    <View style={styles.__container}>
      <View style={styles.__cardRow}>
        <Card logo={require('../images/icons/scan.png')} name="Logo 1 Name" text="Text 1" />
        <Card logo={require('../images/icons/scan.png')} name="Logo 2 Name" text="Text 2" />
      </View>
      <View style={styles.__cardRow}>
        <Card logo={require('../images/icons/scan.png')} name="Logo 3 Name" text="Text 3" />
        <Card logo={require('../images/icons/scan.png')} name="Logo 4 Name" text="Text 4" />
      </View>
      <View style={styles.__cardRow}>
        <Card logo={require('../images/icons/scan.png')} name="Logo 5 Name" text="Text 5" />
        <Card logo={require('../images/icons/scan.png')} name="Logo 6 Name" text="Text 6" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  __container: {
    flex: 1,
    padding: 16,
  },
  __cardRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  __cardContainer: {
    flex: 1,
    backgroundColor: 'gray',
    borderRadius: 8,
    marginRight: 16,
    overflow: 'hidden',
  },
  __cardContent: {
    padding: 16,
  },
  __logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  __logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  __logoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  __cardText: {
    fontSize: 14,
  },
});

export default Careers;
