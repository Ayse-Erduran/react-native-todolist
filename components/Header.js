import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
      color: 'white',
      fontSize: 28
  }

});

export default Header;
