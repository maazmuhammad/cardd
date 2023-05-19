import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';

const QRScanner = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    setScannedData(data);
   
  };

  const toggleTorch = () => {
    
    
  };

  useEffect(() => {
    
  }, [scannedData]);

  return (
    <View style={styles.container}>
      <Image source={require('../assests/images/drawable-xxxhdpi/background.png')}  />
      <View style={styles.overlay}>
        <View style={styles.blinkingLines} />
      </View>

      <View style={styles.header}>
        <Image source={require('../assests/images/drawable-xxxhdpi/arrow.png')} style={styles.arrowLogo} />
        <Image source={require('../assests/images/drawable-xxxhdpi/logo.png')} style={{left:50}} />

        <Text style={styles.countryName}>LONDON</Text>
        <Image source={require('../assests/images/drawable-xxxhdpi/flag.png')} style={styles.arrowLogo} />

      </View>

      <View style={styles.bottomBar}>
        <Image source={require('../assests/images/drawable-xxxhdpi/QRlogo.png')} style={styles.qrCodeImage} />
        <Text style={styles.historyText}>History</Text>
        <TouchableOpacity onPress={toggleTorch} style={styles.torchButton}>
          <Image source={require('../assests/images/drawable-xxxhdpi/touch.png') }style={{width:20,height:25}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blinkingLines: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 10,
    opacity: 0.5,
    
  },
  header: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  arrowLogo: {
    width: 30,
    height: 20,
    marginHorizontal:20,
    
    
  },
  countryName: {
    color: 'white',
    fontSize: 10,
    left:50
  },
  bottomBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  torchButton: {
    padding: 20,
  },
  historyText: {
    color: 'white',
    fontSize: 16
  },
  qrCodeImage: {
    width: 20,
    height: 25,
    margin:20
  },
});

export default QRScanner;
