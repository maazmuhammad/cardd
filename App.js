import React from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import QRScanner from './Components/QRScanner';

const App = () => {
  return (
    <View style={styles.container}
    
    >
       

    <QRScanner />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:"black"
  },
})

export default App;
