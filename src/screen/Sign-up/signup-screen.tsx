import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './signup-screen.styles';
import {
  Imagebg,
  check_ic,
  uncheck_ic,
  show_ic,
  hide_ic,
  chevron_ic,
} from '../../assets/Index';
import LinearGradient from 'react-native-linear-gradient';
import {useTogglePasswordVisibility} from './hook/useTogglePasswordVisibility';
import {checksignup} from './hook/checksignup';
const text16 = 'I am over 16 years of age';
const text_policy_1 =
  'By clicking Sign Up, you are indicating that you have read and agree to the ';
const text_policy_2 = 'Terms of Service ';
const text_policy_3 = ' Privacy Policy';

const supportedURL = 'https://github.com/hau1412';

const SignupScreen = ({navigation}): any => {
  console.log('navigation', navigation);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const {checkEmail, checkpass, errEmail, errPass, levelPass, textLevelPass} =
    checksignup();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setcheck] = useState(false);

  const setemailfunc = (text: React.SetStateAction<any>): any => {
    setemail(text);
    checkEmail(text);
  };
  const setpass = (text: React.SetStateAction<any>): any => {
    setPassword(text);
    checkpass(text);
  };

  const onpressTerms = () => {
    Linking.openURL(supportedURL);
  };

  const onPressLogin = () => {
    if (check == true && !errEmail == false) {
      console.log('login thanh cong');
      navigation.navigate('HomeScreen');
      return;
    } else {
      // navigation.navigate('HomeScreen');
      return console.log(
        'login khong thanh cong',
        {errEmail},
        {errPass},
        {check},
      );
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={Imagebg} style={styles.container}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0 ,0)',
              'rgba(0, 0, 0 ,0.1)',
              'rgba(1, 1, 1,1)',
              'rgba(1, 1, 1,1)',
              'rgb(1, 1, 1)',
            ]}
            style={styles.linearGradient}>
            <Text style={styles.textStarted}>Let’s get you started!</Text>
            <Text style={styles.textTitle}>Your email</Text>
            <TextInput
              placeholder="hau@gmail.com"
              placeholderTextColor="gray"
              style={[styles.textInput, {color: !errEmail ? 'red' : 'white'}]}
              onChangeText={text => setemailfunc(text)}
              value={email}></TextInput>

            <View style={styles.rectangle}></View>
            <Text style={styles.textTitle}>Your password</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                secureTextEntry={passwordVisibility}
                style={styles.textInput}
                onChangeText={text => setpass(text)}
                value={password}
              ></TextInput>
              <TouchableOpacity onPress={handlePasswordVisibility}>
                <Image
                  source={rightIcon === 'show_ic' ? show_ic : hide_ic}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.rectangle,
                {
                  backgroundColor:
                    levelPass == 1
                      ? 'rgba(224, 81, 81, 1)'
                      : levelPass == 2
                      ? 'rgba(227, 160, 99, 1)'
                      : levelPass == 3
                      ? 'rgba(100, 127, 255, 1)'
                      : levelPass == 4
                      ? 'rgba(145, 226, 183, 1)'
                      : 'gray',
                  width:
                    levelPass == 1
                      ? '25%'
                      : levelPass == 2
                      ? '50%'
                      : levelPass == 3
                      ? '75%'
                      : levelPass == 4
                      ? '100%'
                      : '100%',
                },
              ]}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'red'}}>{errPass}</Text>
              <Text
                style={[
                  // styles.rectangle,
                  {
                    color:
                      levelPass == 1
                        ? 'rgba(224, 81, 81, 1)'
                        : levelPass == 2
                        ? 'rgba(227, 160, 99, 1)'
                        : levelPass == 3
                        ? 'rgba(100, 127, 255, 1)'
                        : levelPass == 4
                        ? 'rgba(145, 226, 183, 1)'
                        : '',
                  },
                ]}>
                {textLevelPass}
              </Text>
            </View>
            <View style={styles.policycheck}>
              <TouchableOpacity
                style={styles._check}
                onPress={() => setcheck(!check)}>
                <Image
                  source={check ? check_ic : uncheck_ic}
                  style={styles.img_check}></Image>
              </TouchableOpacity>
              <Text style={styles.text_check}>{text16}</Text>
            </View>
            <Text style={styles.text_policy}>
              {text_policy_1}
              <Text
                style={styles.text_policy_Terms}
                onPress={() => onpressTerms()}>
                {text_policy_2}
              </Text>
              and
              <Text
                style={styles.text_policy_Pri}
                onPress={() => onpressTerms()}>
                {text_policy_3}
              </Text>
            </Text>
            <View style={styles.viewsignup}>
              <Text style={styles.textsignup}>Sign Up</Text>
              <TouchableOpacity
                onPress={() => {
                  onPressLogin();
                }}>
                <Image source={chevron_ic} style={styles.icsignup}></Image>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
