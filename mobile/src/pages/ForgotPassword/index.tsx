import React from 'react';
import { View, Image, Text, ImageBackground, TextInput } from 'react-native';

import bgImage from '../../assets/images/give-classes-background.png';

import logo from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';



const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>Sua plataforma de {"\n"}estudos online</Text>
        </ImageBackground>
        <View style={styles.viewTextPage}>
          <Image source={backIcon} />
          <Text style={styles.textTitle}>Esqueceu sua senha?</Text>
          <Text style={styles.textDescription}>
            Não esquenta, {'\n'}
            vamos dar um jeito nisso
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#C1BCCC"
          focusable
        />
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default ForgotPassword;
