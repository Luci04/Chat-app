import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import IconComponent from "./IconComponent";

const FooterMessage = () => {

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Keyboard is now visible
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Keyboard is now hidden
      }
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <IconComponent iconType="Feather" iconName="paperclip" size={24} color="#000E08" />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Write your message"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <IconComponent iconType={"FontAwesome"} iconName="files-o" size={24} color="#000E08" />
        </TouchableOpacity>
      </View>
      {
        keyboardVisible ? <TouchableOpacity style={styles.iconContainer}>
          <View style={{ padding: 10, backgroundColor: '#20A090', borderRadius: 999, justifyContent: 'center', alignItems: 'center ' }}>
            <IconComponent iconType={"MaterialIcons"} iconName="send" size={24} color="#fff" />
          </View>
        </TouchableOpacity> : <>
          <TouchableOpacity style={styles.iconContainer}>
            <IconComponent iconType={"Feather"} iconName="camera" size={24} color="#000E08" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <IconComponent iconType={"Feather"} iconName="mic" size={24} color="#000E08" />
          </TouchableOpacity>
        </>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  iconContainer: {
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#F3F6F6',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 12,
    color: "#333",
  },
});
export default FooterMessage;
