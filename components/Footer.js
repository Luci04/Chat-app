import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text, Pressable } from "react-native";
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.mystatus}>
        <Icon name="message1" size={20} style={styles.profileImg} />
        <Text style={styles.title}>Message</Text>
      </Pressable>
      <Pressable style={styles.mystatus}>
        <Icons name="call-outline" size={20} style={styles.profileImg} />
        <Text style={styles.title}>Calls</Text>
      </Pressable>
      <Pressable style={styles.mystatus}>
        <Icon name="message1" size={20} style={styles.profileImg} />
        <Text style={styles.title}>Contact</Text>
      </Pressable>
      <Pressable style={styles.mystatus}>
        <Icon name="setting" size={20} style={styles.profileImg} />
        <Text style={styles.title}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "white",
    gap: 2,
  },
  mystatus: {
    alignItems: "center",
  },
});

export default Footer;
