import React, { useState, useEffect, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import stopId from "../data/stopId";
import routeId, { getRouteName } from "../data/routeId";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../styles/styles";

const apiKey = "5c188f0c-0b40-44ee-9ae1-96b818de8fa5";
const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const handlePress = () =>{
    Linking.openURL('https://www.ko-fi.com/kacperczech');
}

const Credits = () => {
  const screenHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainBlock}>
          <Text style={styles.textContainer}>O aplikacji</Text>
        </View>
        <View style={styles.midBlock}>
          <Text style={styles.textCredits}>
            Dane są pozyskane z Zarządu Transportu Miejskiego w Gdańsku {"\n"}
          </Text>
        </View>

        <Text style={styles.textContainer}>
          Aplikacja została opracowana przez Kacper Czech
        </Text>


        <Text style={styles.textContainer1}>
          Przydała Ci się moja praca?{"\n"} Wesprzyj mnie!
        </Text>
        <TouchableOpacity onPress={handlePress} style={styles.kofiButton}>
          <Image
            source={require("../../assets/img/kofi1.png")}
            style={styles.kofi}
          />
        </TouchableOpacity>
        <Text style={styles.disclaimer1}>
          Dane mają charakter orientacyjny {"\n"}Twórca nie ponosi
          odpowiedzialności{"\n"} za prawdziwość danych
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Credits;
