import { View, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import StatusSlider from "../components/StatusSlider";
import MainChatWindow from "../components/MainChatWindow";
// import { useSelector } from "react-redux";
import Footer from "../components/Footer";

export default function HomePage() {
  // const currentUser = useSelector((state) => state.auth.currentUser);

  // console.log(currentUser);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusSlider />
      <MainChatWindow />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
