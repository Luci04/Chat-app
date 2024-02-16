import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import ApiConnector from "../api/apiConnector";
import ApiEndpoints from "../api/apiEndpoints";
import AppPaths from "../lib/appPaths";
import CookieUtil from "../util/cookieUtil";
import SafeArea from "../components/SafeArea";

const SignIn = ({ navigation }) => {

  const [username, setUserName] = useState("avinashukla2000@gmail.com");
  const [password, setPassword] = useState("avinashukla2000@gmail.com");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (loginData) => {

    console.log(loginData);

    const successLoginData = await ApiConnector.sendPostRequest(
      ApiEndpoints.LOGIN_URL,
      JSON.stringify(loginData),
      false,
      false
    );

    console.log(successLoginData);
    // if (successLoginData) {
    //   Object.keys(successLoginData).forEach((key) => {
    //     CookieUtil.setCookie(key, successLoginData[key]);
    //   });
    //   window.location.href = AppPaths.HOME;
    // }
  };

  return (
    <SafeArea style={styles.container}>
      <View style={styles.loginTextContainer}>
        <View style={styles.loginTextSubContainer}>
          <Text style={styles.loginText}>Log in to Chatbox</Text>
          <View style={styles.loginTextBottomBar}></View>
        </View>
        <Text style={styles.loginSubtext}>
          Welcome back! Sign in using your social account or email to continue us
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
            source={require("../assets/group-460.png")}
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your email</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUserName}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginBtnOnlyText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  loginTextContainer: {
    gap: 16
  },
  loginTextSubContainer: {
    width: 145,
    alignSelf: 'center'
  },
  loginText: {
    zIndex: 100,
    width: '100%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: FontFamily.caros,
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 'auto'
  },
  loginTextBottomBar: {
    position: 'absolute',
    width: 50,
    height: 10,
    left: 0,
    bottom: 0,
    backgroundColor: '#58C3B6',
    zIndex: 10,
  },
  loginSubtext: {
    fontFamily: FontFamily.circularStd,
    color: '#797C7B',
    fontSize: 14,
    textAlign: 'center'
  },
  socialContainer: {
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
    borderColor: '#000',
    borderRadius: 999
  },
  OrContainer: {
    marginVertical: 30,
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
    color: '#797C7B',
    fontFamily: FontFamily.circularStd,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  bottomButtonContainer: {
    gap: 16,
    position: 'absolute',
    width: '100%',
    bottom: 20
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#F3F6F6',
    borderRadius: 20
  },
  loginBtnText: {
    paddingVertical: 16,
    textAlign: 'center',
    fontFamily: FontFamily.caros,
    fontWeight: 'bold',
    color: '#797C7B'
  },
  loginBtnOnlyText: {
    color: '#24786D',
    textAlign: 'center',
    fontFamily: FontFamily.circularStd,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    color: Color.colorTeal,
    fontFamily: FontFamily.circularStd,
  },
  input: {
    height: 40,
    color: Color.colorBlack,
    borderBottomWidth: 1,
    borderBottomColor: '#CDD1D0',
    paddingHorizontal: 10,
    fontFamily: FontFamily.circularStd,
    fontSize: FontSize.size_sm
  },
  button: {
    backgroundColor: Color.colorTeal,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: Border.br_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.circularStd,
  },
});

export default SignIn;
