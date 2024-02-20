import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import StatusSlider from "../components/StatusSlider";
import MainChatWindow from "../components/MainChatWindow";
// import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import SafeArea from "../components/SafeArea";

export default function HomePage() {
  // const currentUser = useSelector((state) => state.auth.currentUser);

  // console.log(currentUser);
  return (
    <SafeArea style={styles.container}>
      <Header />
      <StatusSlider />
      <MainChatWindow />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
