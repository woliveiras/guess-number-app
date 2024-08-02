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
  const [leaderboard, setLeaderboard] = useState({ wins: 0, loses: 0 });
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState<Result>(Results.WAITING);
  const [number, setNumber] = useState(0);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (number !== 0) return;
    const randomNumber = Math.floor(Math.random() * 51);
    setNumber(randomNumber);
  }, [number]);

  useEffect(() => {
    if (result === Results.WIN) {
      setLeaderboard((prev) => ({ ...prev, wins: prev.wins + 1 }));
      Alert.alert("Result", "Você ganhou!!!", [
        {
          text: "Restart",
          onPress: () => onWin(),
        },
      ]);
    }

    if (result === Results.LOSE) {
      setLeaderboard((prev) => ({ ...prev, loses: prev.loses + 1 }));
      Alert.alert("Result", "Você perdeu!", [
        {
          text: "Restart",
          onPress: () => onLose(),
        },
      ]);
    }
  }, [result]);

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

  const onLose = () => {
    const diff = Math.abs(number - guess);

    if (diff <= 1) {
      setNotification("Tá pegando fogo! 🔥🔥🔥");
    } else if (diff <= 2) {
      setNotification("Está quente! 🔥🔥");
    } else if (diff <= 5) {
      setNotification("Está morno! 🔥");
    } else if (diff <= 10) {
      setNotification("Está frio! ❄️");
    } else {
      setNotification("Está muito frio! ❄️❄️❄️");
    }

    setResult(Results.WAITING);
  };

  const onWin = () => {
    setNotification("");
    setResult(Results.WAITING);
    setGuess(0);
    setNumber(Math.floor(Math.random() * 51));
  };

  return (
    <View style={styles.container}>
      <View style={styles.leaderboardContainer}>
        <Text style={styles.text}>Pontuação</Text>
        <>
          <Text style={styles.text}>Vitórias: {leaderboard.wins}</Text>
          <Text style={styles.text}>Derrotas: {leaderboard.loses}</Text>
        </>
      </View>

      <View style={styles.informationContainer}>
        <Text style={styles.text}>
          Clique nos botões para escolher um número.
        </Text>
        <Text style={styles.text}>Clique em "Jogar!" para apostar.</Text>
        <Text style={styles.text}>O número está entre 1 e 50.</Text>
        {notification ? <Text style={styles.text}>{notification}</Text> : null}
      </View>

      <View style={styles.userGuessContainer}>
        <Text style={styles.guessHighlight}>{guess}</Text>
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
            <Text style={styles.buttonText}>Jogar!</Text>
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
    </View>
  );
}
