import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  informationContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "lightblue",
    paddingBottom: 80,
  },
  userGuessContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderTopWidth: 5,
    borderBottomWidth: 5,
  },
  buttonsContainer: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    backgroundColor: "pink",
  },
  guess: {
    fontSize: 20,
  },
  guessHighlight: {
    fontSize: 80,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20,
    padding: 25,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
