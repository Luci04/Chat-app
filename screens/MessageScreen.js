import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HeaderMessage from "../components/HeaderMessage";
import ChatScreen from "./ChatScreen";
import FooterMessage from "../components/FooterMessage";
import SafeArea from "../components/SafeArea";

const MessageScreen = () => {
  return (
    <SafeArea style={styles.container}>
      <HeaderMessage />
      <ChatScreen style={styles.chatContainer} />
      <FooterMessage />
    </SafeArea>
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
