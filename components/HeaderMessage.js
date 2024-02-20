import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../GlobalStyles";
import IconComponent from "./IconComponent";
export default function HeaderMessage() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate("HomePage");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            contentFit="cover"
            style={styles.profileImg}
            source={require("../assets/ellipse-307.png")}
          />
          <View style={styles.smallcontainer}>
            <Text style={styles.title}>Alex Linderson</Text>
            <Text style={styles.status}>Active Now</Text>
          </View>
        </View>
        <View style={styles.iconcontainer}>
          <TouchableOpacity>
            <IconComponent iconType={'Feather'} iconName="phone" size={18} color="#000E08" />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconComponent iconType={'FontAwesome'} iconName="video-camera" size={18} color="#000E08" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 24
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row'
  },
  profileImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginLeft: 10,
  },
  chatcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 7,
  },
  smallcontainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "baseline",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "500",
    fontFamily: FontFamily.caros,
    color: '#000E08',
    fontSize: 16,
  },
  status: {
    fontFamily: FontFamily.circularStd,
    color: '#797C7B',
    fontSize: 12,
  },
  iconcontainer: {
    flexDirection: "row",
    gap: 16
  },
  icon: {
    marginRight: 10,
  },
});
