import React from "react";
import {
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SearchInput from "./components/SearchInput";
import getImageForWeather from "./utils/getImageForWeather";

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ImageBackground source={getImageForWeather('Clear')} style={styles.imageContainer} imageStyle={styles.image}>
            <View style={styles.detailsContainer}>
                <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
                <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
                <SearchInput placeholder="Search any city2" />
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",

  },
  imageContainer: {
    flex: 1,

  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20
  },   
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: '#fff',
  },
  smallText: {
    fontSize: 18,
  },
  text: {
    fontWeight: "bold",
    color: "red",
  },
});
