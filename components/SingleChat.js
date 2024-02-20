import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
;
const SingleChat = ({ style }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Message')}>
      <View style={[styles.header, style]}>
        <Image
          contentFit="cover"
          style={styles.profileImg}
          source={require("../assets/ellipse-307.png")}
        />
        <View style={styles.chatcontainer}>
          <View style={styles.smallcontainer}>
            <Text style={styles.title}>Alex Linderson</Text>
            <Text style={styles.message}>How are you today</Text>
          </View>
          <View style={[styles.smallcontainer, { justifyContent: 'space-between' }]}>
            <Text style={styles.message}>2 min ago</Text>
            <View style={styles.countContainer}>
              <Text style={styles.messageCount} >99++</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  smallcontainer: {
    justifyContent: 'space-evenly'
  },
  title: {
    color: '#000',
    fontFamily: FontFamily.caros,
    fontWeight: "500",
    fontSize: 20,
  },
  message: {
    fontFamily: FontFamily.circularStd,
    fontWeight: "400",
    fontSize: 12,
    color: '#797C7B'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    margin: 4,
    marginTop: 15,
  },
  chatcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageCount: {
    width: 22,
    height: 22,
    color: Color.colorWhite,
    backgroundColor: '#F04A4C',
    textAlign: 'center',
    borderRadius: 11
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 999
  }
});
export default SingleChat;
