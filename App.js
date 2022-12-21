import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity} from "react-native";

import axios from "axios";

import Icon from "react-native-vector-icons/MaterialIcons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const url_pre =
    "https://api.themoviedb.org/3/search/movie?api_key=ea5b7a6c41593097011e262eae16bb2e&query=";
  const url_pos = "&language=pt-BR";
  let url_final = "";

  const pesquisaFilme = async (entrada) => {
    url_final = url_pre + entrada + url_pos;
    axios.get(`${url_final}`).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  };

  useEffect(() => {
    fetch(url_final)
      .then((response) => response.json())
      .then((responseJson) => {
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ItemView = (item) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.title}
        {" - "}
        {item.release_date}
        {"\n\n"}
      </Text>
    );
  };

  const getItem = (item) => {
    alert(
      "Título: " +
        item.title +
        "\n\nTítulo Original: " +
        item.original_title +
        "\n\nSinopse: " +
        item.overview +
        "\n\nAno de Lançamento: " +
        item.release_date +
        "\n\nNota do Filme na plataforma: " +
        item.vote_average
    );
  };

  return (
    <ScrollView indicatorStyle={styles.container}>
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <Text style={styles.textTop}>App Movies V1.0</Text>
          <Text style={styles.textCenter}>React Native - Expo - API TMDB</Text>
          <View style={styles.viewSearch}>
            <TextInput
              style={styles.input}
              placeholder="Procurando algum Filme?"
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
            <TouchableOpacity style={styles.icon}>
              <Icon
                name="search"
                color="#000"
                size={20}
                onPress={() => pesquisaFilme(search)}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text style={styles.textRetorno}>{movies.map(ItemView)}</Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  itemStyle: {  
    backgroundColor: '#000',
    fontSize: 15,    
    color: 'white',  
  },  
  textTop: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 70,
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  textCenter: {
    marginTop: 30,
    color: "#FFA",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  textRetorno: {
    marginTop: 20,
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  viewSearch: {
    marginTop: 30,
    backgroundColor: "#FFF",
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  input: {
    width: "90%",
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon: {
    position: "absolute",
    right: 18,
    top: 12,
  },
});
