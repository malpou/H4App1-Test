import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HexDropDown from '../components/HexDropDown';

export default function GetColor({ route, navigation }: { route: any, navigation: any }) {
  const { colorCallback, type } = route.params;
  const [redHex, setRedHex] = React.useState('00');
  const [greenHex, setGreenHex] = React.useState('00');
  const [blueHex, setBlueHex] = React.useState('00');
  const [color, setColor] = React.useState('');

  const clickHandler = () => {
    if (color === '') alert('Please select a color');
    else {
      colorCallback(color);
      navigation.goBack();
    }
  }

  useEffect(() => {
    setColor(`#${redHex}${greenHex}${blueHex}`);
  }, [redHex, greenHex, blueHex])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {type !== '' ? `${type}'s Color` : "Get Color"}
      </Text>
      <View style={[styles.colorBg, { backgroundColor: color }]} />
      {HexDropDown(setRedHex, 'red')}
      {HexDropDown(setGreenHex, 'green')}
      {HexDropDown(setBlueHex, 'blue')}
      <Button title='Set Color' onPress={clickHandler} />
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
  colorBg: {
    width: 200,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
