import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [syote, setSyote] = useState('');
  const [data, setData] = useState([]);
 

  const add = () => {
    const lisa = syote;
    setData([...data, {key: lisa}]);
    setSyote('');
  }

  const clear = () => {
    setData([]);
  }

 
 

  return (
    <View style={styles.container}>
      <View style={styles.syotekentta}>
        <TextInput 
        style={styles.input}
        value={syote}
        onChangeText={text => setSyote(text)}
        />
        
        <View style={styles.buttons}>
          <Button
          title='Add'
          onPress={add}
          />
          <Button 
          title='Clear'
          onPress={clear}
          />
        </View>
     
      </View>

      <View style={styles.lista}>
      <Text style={styles.teksti}>Shopping List</Text>
      <FlatList
        
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
      <StatusBar style="auto" />
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
  syotekentta: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'flex-end'

  },
  buttons : {
    
    alignItems: 'baseline',
    flexDirection: 'row'
  },
  input :{
    width: 200,
    borderColor: 'blue',
    borderWidth: 1
  },
  lista: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  teksti: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25
  }
});
