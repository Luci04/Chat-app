import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontFamily } from "../GlobalStyles";

const chatData = [
  { id: "1", sender: "Alex", message: "Hey, how are you?" },
  { id: "2", sender: "You", message: "Hi, I'm good. How about you?" },
  { id: "3", sender: "Alex", message: "I'm doing great, thanks!" },
  { id: "4", sender: "You", message: "That's good to hear!" },
  { id: "5", sender: "Alex", message: "Did you finish the project?" },
  {
    id: "6",
    sender: "You",
    message: `Yes, it's almost done. Just some final touches left.asdasdasdhaosdjoa asjdasjdasjdpajdpaosdjapodj pajspdajspj
    adasdasdasdasd
    a
    sendera
    debuggerasd
    
    a
    sender
    asdasd`,
  },
  {
    id: "7",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
  {
    id: "8",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
  {
    id: "9",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
  {
    id: "10",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
  {
    id: "11",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
  {
    id: "12",
    sender: "You",
    message: "Yes, it's almost done. Just some final touches left.",
  },
];

const ChatScreen = () => {
  const renderChatItem = ({ item }) => (
    <View style={{ marginBottom: 12, gap: 8 }}>
      <View style={item.sender === "You" ? styles.yourMessage : styles.otherMessage}>
        <Text style={item.sender === "You" ? styles.yourText : styles.otherText}>{item.message}</Text>
      </View>
      <Text style={item.sender === "You" ? styles.YourtimeStamp : styles.OthertimeStamp}>09:25 AM</Text>
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
    backgroundColor: "#20A090",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    maxWidth: "80%",
    padding: 8,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    maxWidth: "80%",
    padding: 8,
  },
  yourText: {
    padding: 12,
    fontSize: 12,
    fontFamily: FontFamily.circularStd,
    color: "#fff",
  },
  otherText: {
    padding: 12,
    fontSize: 12,
    fontFamily: FontFamily.circularStd,
    color: "#000",
  },
  YourtimeStamp: {
    fontFamily: FontFamily.circularStd,
    fontSize: 10,
    alignSelf: 'flex-end',
    color: '#797C7B',
    paddingRight: 15
  },
  OthertimeStamp: {
    fontFamily: FontFamily.circularStd,
    fontSize: 10,
    alignSelf: 'flex-start',
    color: '#797C7B',
    paddingLeft: 15
  }
});

export default ChatScreen;
