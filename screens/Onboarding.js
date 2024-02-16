import * as React from "react";
import { StyleSheet, View, StatusBar, ImageBackground, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import SafeArea from "../components/SafeArea";

const h1 = Dimensions.get('window').height;
const h2 = Dimensions.get('screen').height;

const Onboarding = ({ navigation }) => {

  return (
    <SafeArea>
      <View style={{ flex: 1, backgroundColor: '#000', position: 'relative' }}>
        <StatusBar backgroundColor={'transparent'} translucent />
        <View style={{ width: '100%', height: '80%', position: 'absolute', flex: 1, zIndex: -1 }}>
          <ImageBackground style={styles.fullCoverImage} source={require('../assets/ellipse-12263x.png')} resizeMode="cover" />
        </View>
        <View style={styles.mainContainer}>
          <View style={{ paddingVertical: 17, alignItems: 'center' }}>
            <Image source={require('../assets/Logo-uihut.png')} />
          </View>

          <View style={styles.mainTextContainer}>
            <Text style={styles.mainContainerText1}>
              Connect friends
            </Text>
            <Text style={styles.mainContainerText2}>
              easily & quickly
            </Text>
            <Text style={styles.mainContainerText3}>
              Our chat app is the perfect way to stay connected with friends and family.
            </Text>
          </View>

          <View style={styles.socialContainer}>
            <View style={styles.socialImageContainer}>
              <Image
                style={styles.socialContainerItem}
                resizeMode="contain"
                source={require("../assets/group-458.png")}
              />
            </View>
            <View style={styles.socialImageContainer}>
              <Image
                style={styles.socialContainerItem}
                resizeMode="contain"
                source={require("../assets/group-459.png")}
              />
            </View>
            <View style={styles.socialImageContainer}>
              <Image
                style={styles.socialContainerItem}
                resizeMode="contain"
                source={require("../assets/group-4603x.png")}
              />
            </View>
          </View>

          <View style={styles.OrContainer}>
            <View style={styles.OrContainerBorder} />
            <View>
              <Text style={styles.OrContainerText}>
                OR
              </Text>
            </View>
            <View style={styles.OrContainerBorder} />
          </View>

          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.loginBtnText}>Sign up withn mail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.loginBtnOnlyText}>Existing account? <Text style={{ fontWeight: 'bold' }}>
                Log in
              </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  fullCoverImage: {
    flex: 1,
    zIndex: 100,
    bottom: 100
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  mainTextContainer: {

  },
  mainContainerText1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.caros,
    fontSize: 70
  },

  mainContainerText2: {
    color: Color.colorWhite,
    fontWeight: 'bold',
    fontFamily: FontFamily.caros,
    fontSize: 70
  },
  mainContainerText3: {
    fontFamily: FontFamily.caros,
    fontSize: 16,
    color: '#B9C1BE',
    paddingVertical: 16
  },
  socialContainer: {
    justifyContent: 'center',
    marginVertical: 30,
    flexDirection: 'row',
    gap: 20
  },
  socialContainerItem: {
    width: 24,
    height: 24,
    padding: 20
  },
  socialImageContainer: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderRadius: 999
  },
  OrContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  OrContainerBorder: {
    backgroundColor: '#CDD1D0',
    height: 1,
    flex: 1,
  },
  OrContainerText: {
    color: '#D6E4E0',
    fontFamily: FontFamily.circularStd,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  bottomButtonContainer: {
    gap: 16,
    width: '100%',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25
  },
  loginBtnText: {
    paddingVertical: 16,
    textAlign: 'center',
    fontFamily: FontFamily.caros,
    fontWeight: 'bold',
    color: Color.colorBlack
  },
  loginBtnOnlyText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: FontFamily.circularStd
  },

});

export default Onboarding;
