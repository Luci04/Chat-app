import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Color } from "../GlobalStyles";

const Button = (props) => {
  const filledBgColor = props.color || Color.colorWhite;
  const outlinedColor = Color.colorBlack;
  const bgColor = props.filled ? filledBgColor : outlinedColor;

  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: bgColor,
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 18, color: "#000" }}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
});

export default Button;
