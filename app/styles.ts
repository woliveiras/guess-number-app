import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  leaderboardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  informationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userGuessContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  guessHighlight: {
    color: "#fff",
    fontSize: 200,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
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
    backgroundColor: "pink",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
