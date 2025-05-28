import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import "./global.css"; // Add this at the top
export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isAppReady ? (
        <Text style={styles.text}>Hello World!</Text>
      ) : (
        <SplashScreen />
      )}
      <View className="flex-1 bg-red-500 justify-center items-center">
        <Text className="text-white text-2xl">Testing NativeWind</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
