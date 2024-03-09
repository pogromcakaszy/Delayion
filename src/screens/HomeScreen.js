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

const Home = () => {
  const screenHeight = Dimensions.get("window").height;

  DropDownPicker.setListMode("MODAL");

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [selectedStop, setSelectedStop] = useState(Object.keys(stopId)[0]);
  const [delays, setDelays] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetchAllData();
    const intervalId = setInterval(fetchAllData, 20 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedStop]);

  const fetchAllData = async () => {
    const stopIdArray = stopId[selectedStop];

    if (stopIdArray) {
      const allDelays = [];

      for (const stopId of stopIdArray) {
        try {
          const apiUrl = `http://ckan2.multimediagdansk.pl/delays?stopId=${stopId}`;
          const response = await axios.get(apiUrl, { headers });
          console.log("Status Code:", response.status);

          const fetchedDelays = response.data.delay || [];
          console.log("Fetched Delays:", fetchedDelays);

          allDelays.push({ stopId, delays: fetchedDelays });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      setDelays(allDelays);
      forceUpdate();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainBlock}>
          <Text style={styles.textContainer}>Wybierz przystanek:</Text>

          <DropDownPicker
            value={selectedStop}
            open={open}
            onValueChange={(value) => setSelectedStop(value)}
            items={Object.keys(stopId).map((stopName) => ({
              label: stopName,
              value: stopName,
              color: "black",
            }))}
            setValue={setSelectedStop}
            placeholder="Wyszukaj przystanek"
            searchPlaceholder="Wyszukaj przystanek"
            setOpen={setOpen}
            maxHeight={500}
            searchable={true}
            textStyle={{
              fontSize: 20,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            theme="DARK"
            modalProps={{
              animationType: "fade",
            }}
          />
        </View>
        <View style={styles.midBlock}>
          <Text style={styles.textContainer}>Odjazdy z przystanku </Text>
          {delays.map(
            ({ delays: stopDelays }, index) => (
              stopDelays.sort((a, b) => {
                const timeA = new Date(a.estimatedTime);
                const timeB = new Date(b.estimatedTime);
                return timeA - timeB;
              }),
              (
                <View key={index}>
                  {Array.isArray(stopDelays) && stopDelays.length > 0 ? (
                    stopDelays.map((delay, delayIndex) => (
                      <View key={delayIndex} style={styles.delayContainer}>
                        <View style={styles.column30}>
                          <Image
                            source={require("../../assets/img/time.png")}
                            style={styles.img}
                          />
                          <Image
                            source={require("../../assets/img/hurry.png")}
                            style={styles.img}
                          />
                          <Image
                            source={require("../../assets/img/city.png")}
                            style={styles.img}
                          />
                          <Image
                            source={require("../../assets/img/bus.png")}
                            style={styles.img}
                          />
                        </View>
                        <View style={styles.column70}>
                          <Text style={styles.textTime}>
                            Czas przyjazdu: {delay.theoreticalTime}
                          </Text>

                          <Text style={styles.textTime}>
                            Realny czas: {delay.estimatedTime}
                          </Text>

                          <Text style={styles.textTime}>
                            Kierunek: {delay.headsign}
                          </Text>

                          <Text style={styles.textTime}>
                            Linia: {getRouteName(delay.routeId)}
                          </Text>
                        </View>
                      </View>
                    ))
                  ) : (
                    <Text></Text>
                  )}
                </View>
              )
            )
          )}
          <Text style={styles.loadingText}>Narazie nie ma nic więcej 😃</Text>
          <Text style={styles.disclaimer}>
            Dane mają charakter orientacyjny{"\n"} Twórca nie ponosi
            odpowiedzialności za prawdziwość danych
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
