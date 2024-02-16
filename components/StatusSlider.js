import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";

export default function StatusSlider() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.mystatus}>
          <Image
            style={styles.profileImg}
            contentFit="cover"
            source={require("../assets/group-39.png")}
          />
          <Text style={styles.title}>My status</Text>
        </View>
        <View style={styles.mystatus}>
          <Image
            style={styles.profileImg}
            contentFit="cover"
            source={require("../assets/group-14.png")}
          />
          <Text style={styles.title}>Maria</Text>
        </View>
        <View style={styles.mystatus}>
          <Image
            style={styles.profileImg}
            contentFit="cover"
            source={require("../assets/group-15.png")}
          />
          <Text style={styles.title}>Dean</Text>
        </View>
        <View style={styles.mystatus}>
          <Image
            style={styles.profileImg}
            contentFit="cover"
            source={require("../assets/group-17.png")}
          />
          <Text style={styles.title}>Max</Text>
        </View>
        <View style={styles.mystatus}>
          <Image
            style={styles.profileImg}
            contentFit="cover"
            source={require("../assets/group-13.png")}
          />
          <Text style={styles.title}>Adil</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: Color.colorBlack,

    padding: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "flex-start",
    marginTop: 2,
  },
  mystatus: {
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "500",

    color: Color.colorWhite,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
