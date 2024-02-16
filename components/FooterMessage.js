import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Entypo";

const FooterMessage = () => {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.iconContainer}>
        <Icons name="attachment" size={24} color="#555" />
      </Pressable>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
      </View>
      <Pressable style={styles.iconContainer}>
        <Icon name="camera-outline" size={24} color="#555" />
      </Pressable>
      <Pressable style={styles.iconContainer}>
        <Icon name="mic-outline" size={24} color="#555" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  iconContainer: {
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
});
export default FooterMessage;
