import React from 'react';
import { View, Image, Text, ImageBackground, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
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
        style={styles.scroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.profileContent}>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleSection}>Seus dados</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nome</Text>
              <TextInput style={styles.input} placeholder="Nome" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Sobrenome</Text>
              <TextInput style={styles.input} placeholder="Sobrenome" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput style={styles.input} placeholder="E-mail" textContentType="emailAddress" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Whatsapp</Text>
              <TextInput style={styles.input} placeholder="Whatsapp" textContentType="telephoneNumber" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Descrição</Text>
              <TextInput style={styles.input} placeholder="Adicione uma descrição" />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleSection}>Sobre a aula</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Matéria</Text>
              <TextInput style={styles.input} placeholder="Matéria" />
            </View>
            <View style={[styles.inputContainer]}>
              <Text style={styles.inputLabel}>Custo da sua aula por hora</Text>
              <TextInput style={styles.input} placeholder="00,00" />
            </View>
            {/*Componente para criar*/}
            <View style={[styles.sectionContainer, { flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={styles.titleSection}>Horários disponiveis</Text>
              <TouchableWithoutFeedback>
                <Text style={styles.newTimeLabel}>+ Novo</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={[styles.inputContainer, {}]}>
              <Text style={styles.inputLabel}>Dia da semana</Text>
              <TextInput style={styles.input} placeholder="Segunda Feira" />
            </View>
            <View style={[styles.inputContainer, { flexDirection: "row", justifyContent: "space-between" }]}>
              <View>
                <Text style={styles.inputLabel}>Das</Text>
                <TextInput style={[styles.input, { width: 140 }]} placeholder="8:00 Horas" />
              </View>
              <View>
                <Text style={styles.inputLabel}>Até</Text>
                <TextInput style={[styles.input, { width: 140 }]} placeholder="10:00 Horas" />
              </View>
            </View>
            <View style={{ alignItems: "center", paddingBottom: 10, paddingTop: 5 }}>
              <TouchableWithoutFeedback style={styles.buttonDeleteTime}>
                <Text style={styles.labelDeleteTime}>+ Excluir Horário</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <RectButton style={styles.buttonSave}>
              <Text style={styles.textButtonSave}>Salvar alterações</Text>
            </RectButton>
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default Profile;
