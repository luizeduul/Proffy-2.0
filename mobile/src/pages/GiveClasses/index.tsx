import React from 'react';
import { View, ImageBackground, Text, ScrollView, TextInput, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import bgImage from '../../assets/images/give-classes-background.png';
import PageHeader from '../../components/PageHeader';


const GiveClasses = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title=""
        pageTitle="Dar aulas"
      >
        <View>
          <Text style={styles.textTitle}>
            Que incrível que você quer dar aulas.
          </Text>
          <Text style={styles.textDescription}>
            O primeiro passo é preencher esse formulário de inscrição
          </Text>
        </View>
      </PageHeader>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.classesContent}>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleSection}>Seus dados</Text>
            <View style={styles.imgProfileContainer}>
              <Image
                style={styles.imgProfile}
                source={{ uri: 'https://avatars3.githubusercontent.com/u/7030943?s=460&u=71fc0a7dfcf703144fd2436c3c231126581b40c1&v=4' }}
              />
              <View style={styles.textProfileView}>
                <Text style={styles.textNameProfile}>Luiz Edu</Text>
                <Text style={styles.textSubject}>ReactJS</Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Whatsapp</Text>
              <TextInput style={styles.input} placeholder="Seu Whatsapp" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Descrição</Text>
              <TextInput style={styles.input} placeholder="Digite uma descrição" />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.titleSection}>Sobre a aula</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Matéria</Text>
              <TextInput style={styles.input} placeholder="Matéria" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Custo da sua hora por aula</Text>
              <TextInput style={styles.input} placeholder="R$ 20,00" />
            </View>
          </View>
          <View style={[styles.sectionContainer, { flexDirection: "row", justifyContent: "space-between" }]}>
            <Text style={styles.titleSection}>Horários disponiveis</Text>
            <TouchableWithoutFeedback>
              <Text style={styles.newTimeLabel}>+ Novo</Text>
            </TouchableWithoutFeedback>
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
          <View style={styles.buttonContainer}>
            <RectButton style={styles.buttonSave}>
              <Text style={styles.textButtonSave}>Salvar alterações</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

export default GiveClasses;
