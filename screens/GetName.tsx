import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const data = ["Mother", "Father", "Sister", "Brother"]

export default function GetName({ route, navigation }: { route: any, navigation: any }) {
  const { nameCallback, typeCallback } = route.params;
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');

  const clickHandler = () => {
    if (name === '' && type === '') alert('Please enter a name and select a type');
    else if (name === '') alert('Please enter a name')
    else if (type === '') alert('Please select a type')
    else {
      nameCallback(name);
      typeCallback(type);
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigtext}>Write the name of your....</Text>
      {data.map((item, index) => (
        <Button key={index} title={item} onPress={() => {
          setType(item)
          setSelectedIndex(index)
        }} color={selectedIndex === index ? 'green' : 'red'} />
      ))}
      {type !== ''
        && <>
          <Text style={styles.smalltext}>{type}'s name: </Text>
          <TextInput editable keyboardType='default'
            onChangeText={text => setName(text)} style={styles.input} />
          <Button title='Send' onPress={clickHandler} />
        </>}
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
  bigtext: {
    fontSize: 30,
    color: 'black',
  },
  smalltext: {
    fontSize: 20,
    color: 'black',
  },
  input: {
    width: 160,
    marginBottom: 18,
    padding: 8,
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    color: "black",
    fontSize: 18,
  },

});
