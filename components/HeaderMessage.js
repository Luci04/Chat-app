import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HeaderMessage() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate("HomePage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackButtonPress}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Image
          contentFit="cover"
          style={styles.profileImg}
          source={require("../assets/ellipse-307.png")}
        />
        <View style={styles.chatcontainer}>
          <View style={styles.smallcontainer}>
            <Text style={styles.title}>Alex Linderson</Text>
            <Text style={styles.message}>Active Now</Text>
          </View>
          <View style={styles.iconcontainer}>
            <Icon name="call-outline" size={25} style={styles.icon} />
            <Icon name="videocam-outline" size={25} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 10,
  },
  chatcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 7,
  },
  smallcontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
  message: {
    fontSize: 12,
  },
  iconcontainer: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
  },
  icon: {
    marginRight: 10,
  },
});
