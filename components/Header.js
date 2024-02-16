import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImg}
          contentFit="cover"
          source={require("../assets/group-370.png")}
        />
        <Text style={styles.title}>Home</Text>
        <Image
          contentFit="cover"
          style={styles.profileImg}
          source={require("../assets/ellipse-307.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: Color.colorBlack,
    padding: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15,
  },
  title: {
    fontWeight: "500",
    lineHeight: 20,
    color: Color.colorWhite,
    marginLeft: 10,
    marginRight: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
