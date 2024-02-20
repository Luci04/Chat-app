import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import StatusSlider from "../components/StatusSlider";
import MainChatWindow from "../components/MainChatWindow";
// import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import SafeArea from "../components/SafeArea";
import IconComponent from "../components/IconComponent";
import { FontFamily } from "../GlobalStyles";

export default function HomePage() {
  // const currentUser = useSelector((state) => state.auth.currentUser);

  // console.log(currentUser);
  return (
    <SafeArea style={styles.container}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 18, paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }} >
          <View style={{ padding: 12, borderWidth: 1, borderColor: '#363F3B', borderRadius: 100 }}>
            <IconComponent iconType={'AntDesign'} iconName={'search1'} size={19} color={'#fff'} />
          </View>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', flex: 1, fontFamily: FontFamily.caros, fontWeight: '500', fontSize: 20, color: '#fff' }} >
          Home
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }} >
          <View style={{ padding: 12, borderWidth: 1, borderColor: '#363F3B', borderRadius: 100 }}>
            <IconComponent iconType={'MaterialIcons'} iconName={'add-call'} size={19} color={'#fff'} />
          </View>
        </TouchableOpacity>
      </View>
      <StatusSlider />
      <MainChatWindow />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
});
