import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import tooDark from '../tooDark';

export default function Main({ navigation }: { navigation: any }) {
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');
  const [color, setColor] = React.useState('white');

  const reset = () => {
    setName('');
    setType('');
    setColor('white');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Get Ones Name And Color</Text>
      <Button title='Get Ones Name' onPress={
        () => {
          navigation.navigate('GetName', { nameCallback: setName, typeCallback: setType });
        }} />

      <Text style={[styles.text, styles.margintop, { backgroundColor: color, color: tooDark(color) ? "white" : "black" }]}>{
        name !== '' ? `${type}'s name: ${name}`
          : 'Here comes the name'}
      </Text>

      <Button title='Get Ones Color' onPress={() => {
        navigation
          .navigate('GetColor', { colorCallback: setColor, type: type });
      }} />

      {name !== '' && type !== '' && color !== '' &&
        <>
          <Text style={styles.margintop} />
          <Button title='Reset' onPress={reset} />
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  margintop: {
    marginTop: 75,
  }
});
