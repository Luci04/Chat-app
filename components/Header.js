import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";

export default function Header() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.profileImg}
          contentFit="cover"
          source={require("../assets/group-370.png")}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
        <Image
          contentFit="cover"
          style={styles.profileImg}
          source={require("../assets/ellipse-307.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.colorBlack,
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
    fontSize: 20,
    color: Color.colorWhite,
    marginLeft: 10,
    marginRight: 10,
  },
  profileImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});
