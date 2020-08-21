import React from 'react';
import { View, Image, Text, CheckBox, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import logo from '../../assets/images/logo.png';

import styles from './styles';

const Login = () => {
  return (
    <KeyboardAvoidingView

      behavior={(Platform.OS === "ios") ? "padding" : "height"} 
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      enabled
      style={styles.container}

    >
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Sua plataforma de {"\n"}estudos online</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fazer Login</Text>
        <TouchableWithoutFeedback style={styles.buttonNewAccount}>
          <Text style={styles.textNewAccount}>Criar uma conta</Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#C1BCCC"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#C1BCCC"
        />
      </View>
      <View style={styles.rememberContainer}>
        <Text style={styles.checkBox}>Lembrar-me</Text>
        <TouchableWithoutFeedback style={styles.buttonForget}>
          <Text style={styles.textForgetButton}>Esqueci minha senha</Text>
        </TouchableWithoutFeedback>
      </View>
      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>
    </KeyboardAvoidingView>
  );
}

export default Login;
