import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Splash = ({ navigation }) => {


  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding")
    }, 3000);
  }, [])


  return (
    <View style={styles.splash}>
      <Pressable onPress={() => { }}>
        <View style={styles.logoUihut}>
          <Image
            style={styles.subtractIcon}
            source={require("../assets/subtract1.png")}
          />
          <Text style={[styles.chatbox, styles.textTypo]}>Chatbox</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontWeight: "500",
  },

  text: {
    marginTop: -4.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    left: "0%",
    width: "100%",
  },

  chatbox: {
    top: 20,
    fontSize: 40,
    lineHeight: 40,
    fontStyle: "italic",
    fontFamily: FontFamily.circularStd,
    color: "#001815",
    left: 0,
  },
  subtractIcon: {
    width: 59,
    height: 71,
  },
  logoUihut: {
    top: 345,
    left: 110,
    width: 154,
    height: 123,

    alignItems: "center",
    justifyContent: "center",
  },
  splash: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash;
