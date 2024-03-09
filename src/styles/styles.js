import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flex: 1,
  },
  mainBlock: {
    backgroundColor: "#232323",
    margin: 20,
    zIndex: 1,
  },
  column30: {
    flex: 0.1,
  },
  column70: {
    flex: 0.9,
  },
  midBlock: {
    backgroundColor: "#111111",
  },
  kofiButton:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontFamily: "Montserrat",
    margin: 10,
  },
  textContainer1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat",
    margin: 10,
  },
  img: {
    width: 20,
    height: 20,
    margin: 9,
    //resizeMode: "contain",
  },
  disclaimer: {
    color: "crimson",
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: 15,
    margin: 10,
  },
  disclaimer1: {
    color: "crimson",
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: 17,
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  delayContainer: {
    flexDirection: "row",
    backgroundColor: "#343434",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  delayHeadSignText: {
    color: "red",
    fontSize: 30,
    fontFamily: "Montserrat",
  },
  textCredits: {
    marginTop: 30,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontFamily: "Montserrat",
  },
  kofi: {
    width: 300,
    height:90,
    borderRadius: 20,
  },
  textTime: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 15,
    textAlign: "auto",
    margin: 10,
  },
  pickerStyle: {
    inputIOS: {
      color: "white",
      alignSelf: "center",
      borderRadius: 5,
      fontSize: 20,
      fontFamily: "Montserrat",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
    },
    placeholder: {
      color: "white",
    },
    inputAndroid: {
      color: "white",
      alignSelf: "center",
      borderRadius: 5,
      fontSize: 20,
      fontFamily: "Montserrat",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
    },
  },
  loadingText: {
    margin: 10,
    color: "white",
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: 15,
  },
});

export default styles;
