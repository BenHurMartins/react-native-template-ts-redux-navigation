import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../redux/AppReducer';
import type {RootState} from '../../redux/store';

const Detail = () => {
  const {count} = useSelector((state: RootState) => state.appReducer);
  const dispatch = useDispatch();
  const incrementDispatch = () => dispatch(increment());
  const decrementDispatch = () => dispatch(decrement());
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Text>count</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={incrementDispatch} />
      <Button title="decrement" onPress={decrementDispatch} />
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

export default Detail;
