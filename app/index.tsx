import { useEffect, useState } from "react";
import { Pressable, Text, View, Alert } from "react-native";

import { styles } from "./styles";

enum Results {
  WIN = "win",
  LOSE = "lose",
  WAITING = "waiting",
}

type Result = (typeof Results)[keyof typeof Results];

export default function Index() {
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState<Result>(Results.WAITING);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 101);

    setNumber(randomNumber);
  }, []);

  if (result === Results.WIN) {
    Alert.alert("Result", "You win!", [
      { text: "Restart", onPress: () => handleRestart() },
    ]);
  }

  if (result === Results.LOSE) {
    Alert.alert("Result", "You lose!", [
      { text: "Restart", onPress: () => handleRestart() },
    ]);
  }

  const handleGuessButton = (value: number) => {
    if (value < 0) {
      return setGuess(0);
    }

    return setGuess(value);
  };

  const handleStart = (guess: number) => {
    if (!guess || guess === 0) {
      return;
    }

    if (guess === number) {
      return setResult(Results.WIN);
    }

    return setResult(Results.LOSE);
  };

  const handleRestart = () => {
    setResult(Results.WAITING);
    setGuess(0);
    setNumber(Math.floor(Math.random() * 101));
  };

  return (
    <>
      <View style={styles.informationContainer}>
        <Text style={styles.text}>
          Click on the buttons to update your guess.
        </Text>
        <Text style={styles.text}>Click on Go to guess the number.</Text>
      </View>

      <View style={styles.userGuessContainer}>
        <Text style={styles.guessHighlight}>{guess}</Text>
        <Text style={styles.guess}>Your guess</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => handleGuessButton(guess - 5)}
          >
            <Text style={styles.buttonText}>-5</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleGuessButton(guess - 1)}
          >
            <Text style={styles.buttonText}>-1</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleStart(guess)}>
            <Text style={styles.buttonText}>Go!</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleGuessButton(guess + 1)}
          >
            <Text style={styles.buttonText}>+1</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleGuessButton(guess + 5)}
          >
            <Text style={styles.buttonText}>+5</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
