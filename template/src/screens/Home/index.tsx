import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../routes/RootStackParamList';

type DetailScreenRouteProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

const Home = () => {
  const navigation = useNavigation<DetailScreenRouteProp>();
  const navigateToDetail = () => navigation.navigate('Detail');

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={navigateToDetail} title={'Detail'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
