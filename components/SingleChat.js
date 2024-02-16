import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
;
const SingleChat = () => {
  return (
    <View style={styles.header}>
      <Image
        contentFit="cover"
        style={styles.profileImg}
        source={require("../assets/ellipse-307.png")}
      />
      <View style={styles.chatcontainer}>
        <View style={styles.smallcontainer}>
          <Text style={styles.title}>Alex Linderson</Text>
          <Text style={styles.message}>2 min ago</Text>
        </View>
        <View style={styles.smallcontainer}>
          <Text style={styles.message}>How are you today</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 10, // Adjust spacing as needed
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
  message: {
    fontSize: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    margin: 4,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  chatcontainer: {
    flex: 1,
    marginLeft: 7,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
export default SingleChat;
