import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import doneImg from '../../assets/images/icons/done.png';
import bgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';


const DoneScreen = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={styles.content}
        resizeMode="contain">
        <View>
          <Image source={doneImg} style={styles.doneImg} />
          <Text style={styles.title}>Cadastro salvo</Text>
        </View>
        <Text style={styles.description}>
          Tudo certo, seu cadastro está na nossa lista de professores. Agora é
          só ficar de olho no seu Whatsapp.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>
          Fazer Login
        </Text>
      </RectButton>
    </View >
  )
}

export default DoneScreen;
