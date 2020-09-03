import React from 'react';
import { View, Image, ImageBackground, Text, CheckBox, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  function handleLogin() {
    navigate('Landing');
  }
  function handleNavigateToForgotPassword(){
    navigate('ForgotPassword');
  }
  return (
    <KeyboardAvoidingView
      style={[styles.container, { flex: 1 }]}
      behavior="padding"
    >
      <View>
        <ImageBackground
          source={bgImage}
          style={styles.content}
          resizeMode="contain"
        >
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>Sua plataforma de {"\n"}estudos online</Text>
        </ImageBackground>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fazer Login</Text>
        <TouchableWithoutFeedback style={styles.buttonNewAccount}>
          <Text style={styles.textNewAccount}>Criar uma conta</Text>
        </TouchableWithoutFeedback>
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#C1BCCC"
        focusable
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#C1BCCC"
        secureTextEntry
      />
      <View style={styles.rememberContainer}>
        <Text style={styles.checkBox}>Lembrar-me</Text>
        <TouchableWithoutFeedback onPress={handleNavigateToForgotPassword} style={styles.buttonForget}>
          <Text style={styles.textForgetButton}>Esqueci minha senha</Text>
        </TouchableWithoutFeedback>
      </View>
      <RectButton onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>
    </KeyboardAvoidingView>
  );
}

export default Login;
