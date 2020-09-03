import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import logoutIcon from '../../assets/images/icons/sair.png';

import styles from './styles';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);
  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  const { navigate } = useNavigation();
  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  function handleLogout(){
    navigate('Login');
  }

  function handleNavigateToProfilePage(){
    navigate('Profile');
  }

  return (
    <>
      <View style={styles.profileHeader}>
        <View style={styles.profile}>
          <Image
            style={styles.imageProfile}
            source={{ uri: 'https://avatars3.githubusercontent.com/u/7030943?s=460&u=71fc0a7dfcf703144fd2436c3c231126581b40c1&v=4' }}
          />
          <TouchableWithoutFeedback onPress={handleNavigateToProfilePage}>
            <Text style={styles.textProfileName}>Luiz Eduardo</Text>
          </TouchableWithoutFeedback>
          <RectButton onPress={handleLogout} style={styles.logoutButton}>
            <Image source={logoutIcon} />
          </RectButton>
        </View>
        <Image source={landingImage} style={styles.banner} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
          Seja Bem vindo, {"\n"}
          <Text style={styles.titleBold}>
            O que deseja fazer?
        </Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToStudyPages}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Image source={studyIcon} />
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>
          <RectButton
            onPress={handleNavigateToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image source={giveClassesIcon} />
            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>
        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões já realizadas {' '}
          <Image source={heartIcon} />
        </Text>
      </View>
    </>
  );
}

export default Landing;
