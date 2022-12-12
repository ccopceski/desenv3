import React, { useState} from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const{width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'ea5b7a6c41593097011e262eae16bb2e';
export const URL_COMPLETA = 'https://api.themoviedb.org/3/search/movie?api_key=ea5b7a6c41593097011e262eae16bb2e&query=Esqueceram+de+mim&language=pt-BR'


export default function App() {

 return (
   <ScrollView indicatorStyle={styles.container}>
      <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground
            source={{ uri: 'img\wallpaper_AppMovies.jpeg'}}
            style={styles.imgBg}
            blurRadius={8}
          >
            <Text style={styles.textTop}>
                App Movies V1.0
            </Text>

            <Text style={styles.textCenter}>
                React Native - Expo - API TMDB
            </Text>
            
            <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder="Procurando algum Filme?"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={20} onPress={() => alert('Clicou')}/>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  textTop:{
    color: '#FFF', 
    fontSize: 35, 
    fontWeight: 'bold', 
    marginTop: 70, 
    alignSelf: 'center',
    justifyContent: "flex-start",
  },
  textCenter:{
    marginTop: 30,
    color: '#FFA', 
    fontSize: 20, 
    fontWeight: 'bold', 
    alignSelf: 'center',
    justifyContent: "flex-start",
  },  
  imgBg:{
    flex:1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    //backgroundColor: '#000'
  },
  viewSearch:{
    marginTop: 30,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17
  },
  icon:{
    position: 'absolute',
    right: 18,
    top: 12
  }
})