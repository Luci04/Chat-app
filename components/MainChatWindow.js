import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import SingleChat from "./SingleChat";

export default function MainChatWindow() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate("Message");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable onPress={handleBackButtonPress}>
          <SingleChat />
        </Pressable>
        <SingleChat />
        <SingleChat />
        <SingleChat />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.colorBlack,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
  },
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
