import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HeaderMessage from "../components/HeaderMessage";
import ChatScreen from "./ChatScreen";
import FooterMessage from "../components/FooterMessage";

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderMessage />
      <ChatScreen style={styles.chatContainer} />
      <FooterMessage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  chatContainer: {
    flex: 1,
  },
});

export default MessageScreen;
