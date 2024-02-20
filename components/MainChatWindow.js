import { View, Text, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import SingleChat from "./SingleChat";
import RoundedScrollViewWrapper from "./RoundedScrollViewWrapper";

export default function MainChatWindow() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate("Message");
  };
  return (
    <RoundedScrollViewWrapper>
      <ScrollView alwaysBounceVertical={false} bouncesZoom={false} bounces={false}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return <SingleChat key={item} style={{ paddingTop: item == 1 ? 40 : 0 }} index={item} />
          })
        }
      </ScrollView>
    </RoundedScrollViewWrapper>
  );
}

const styles = StyleSheet.create({
  smallcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
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
