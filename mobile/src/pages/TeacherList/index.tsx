import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import foundEmoji from '../../assets/images/icons/foundEmoji.png';

import styles from './styles';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState<number>(0);
  const [time, setTime] = useState('');

  const dayList = [
    {
      key: '0',
      label: 'Domingo'
    },
    {
      key: '1',
      label: 'Segunda-Feira'
    },
    {
      key: '2',
      label: 'Terça-Feira'
    },
    {
      key: '3',
      label: 'Quarta-Feira'
    },
    {
      key: '4',
      label: 'Quinta-Feira'
    },
    {
      key: '5',
      label: 'Sexta-Feira'
    },
    {
      key: '6',
      label: 'Sábado'
    }
  ]

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeacherIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoritedTeacherIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToogleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        pageTitle="Estudar"
        headerRight={(
          <View style={styles.foundProffysView}>
            <Image source={foundEmoji} />
            <Text style={styles.textFoundProffys}>1 Proffys</Text>
          </View>
        )}
      >
        <View style={styles.filterButton}>
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Feather name="filter" size={20} color="#04D361" />
          </BorderlessButton>
          <Text style={styles.filterText}>Filtrar por dia, hora e matéria.</Text>
        </View>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
              value={subject}
              onChangeText={text => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <Picker
                  selectedValue={week_day}
                  onValueChange={(v) => setWeekDay(v) /*issue*/}
                  prompt="Selecione o dia"
                  mode="dialog"
                  style={[styles.input]}
                >
                  {dayList.map(day => {
                    return (
                      <Picker.Item key={day.key} label={day.label} value={day.key} />
                    )
                  })}
                </Picker>
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>
            <RectButton style={styles.submitFilterButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
