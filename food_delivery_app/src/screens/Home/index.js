import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import Features from '../../components/Features';
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Categories />
        <Features />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


