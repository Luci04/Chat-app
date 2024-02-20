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
  Dimensions,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import SafeArea from "../components/SafeArea";

const SignUp = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeArea style={styles.container}>
      <View style={styles.loginTextContainer}>
        <View style={styles.loginTextSubContainer}>
          <Text style={styles.loginText}>Sign up with Email</Text>
          <View style={styles.loginTextBottomBar}></View>
        </View>
        <Text style={styles.loginSubtext}>
          Get chatting with friends and family today by signing up for our chat app!
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your email</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setEmail}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Create an account</Text>
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
    width: 150,
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
    right: 0,
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
    justifyContent: 'space-evenly',
    flex: 1,
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

export default SignUp;
