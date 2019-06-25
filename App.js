import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ImageBackground 
} from 'react-native';
import getImageForWeather from './assets/seoul.jpg';
import SearchInput from './components/SearchInput';


export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>São Paulo</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Nublado</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

          <SearchInput placeholder="Procure por uma cidade"/>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: "white"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
    },
});
