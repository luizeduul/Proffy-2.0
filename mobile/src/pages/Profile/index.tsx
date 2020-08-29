import React from 'react';
import { View, Image, Text, ImageBackground, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import bgImage from '../../assets/images/give-classes-background.png';

import cameraIcon from '../../assets/images/icons/camera.png';

import styles from './styles';


const Profile = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="" pageTitle="Meu Perfil">
        <View>
          <ImageBackground
            source={bgImage}
            style={styles.content}
            resizeMode="contain"
          >
            <Image
              style={styles.imgProfile}
              source={{ uri: 'https://avatars3.githubusercontent.com/u/7030943?s=460&u=71fc0a7dfcf703144fd2436c3c231126581b40c1&v=4' }}
            />
            <RectButton style={styles.buttonAddImage}>
              <Image source={cameraIcon} />
            </RectButton>
            <Text style={styles.textName}>Luiz Edu</Text>
            <Text style={styles.textSubject}>ReactJS</Text>
          </ImageBackground>
        </View>
      </PageHeader>
      <ScrollView 
        style={styles.formRegister}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View>
          <Text style={styles.titleSection}>Seus dados</Text>


        </View>
      </ScrollView>
    </View>
  )
}

export default Profile;
