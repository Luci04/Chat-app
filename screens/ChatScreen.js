import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const chatData = [
  { id: "1", sender: "Alex", message: "Hey, how are you?" },
  { id: "2", sender: "You", message: "Hi, I'm good. How about you?" },
  { id: "3", sender: "Alex", message: "I'm doing great, thanks!" },
  { id: "4", sender: "You", message: "That's good to hear!" },
  { id: "5", sender: "Alex", message: "Did you finish the project?" },
  {
    id: "6",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
];

const ChatScreen = () => {
  const renderChatItem = ({ item }) => (
    <View
      style={item.sender === "You" ? styles.yourMessage : styles.otherMessage}
    >
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        inverted 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  yourMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "80%",
    padding: 8,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "80%",
    padding: 8,
  },
  message: {
    fontSize: 16,
    color: "#000000",
  },
});

export default ChatScreen;
