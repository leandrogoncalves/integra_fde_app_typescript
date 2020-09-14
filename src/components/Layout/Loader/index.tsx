import React from "react";
import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

const Loader: React.FC = () => {
  return (
    <AnimatedLoader
      visible
      // overlayColor="rgba(255,255,255,0.75)"
      source={require("./loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
};

export default Loader;
