import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View className="flex-1 bg-[#EEFFEF] justify-center items-center">
      <Image
        source={require("../assets/splash-logo.png")}
        className="w-[200px] h-[200px]"
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
