import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  
 limpiar = () => {
   console.log("limpiar");
 }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} editable={false} value="0"></TextInput>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.gray, styles.button]} onPress={this.limpiar}>
          <Text style={[styles.buttonText, styles.blackText]}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gray, styles.button]}>
          <Text style={[styles.buttonText, styles.blackText]}>+/_</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gray, styles.button]}>
          <Text style={[styles.buttonText, styles.blackText]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.orange, styles.button]}>
          <Text style={[styles.buttonText, styles.whiteText]}>÷</Text>
        </TouchableOpacity>
      </View>
    
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]}>
          <Text style={[styles.buttonText, styles.whiteText]}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]}>
          <Text style={[styles.buttonText, styles.whiteText]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]}>
          <Text style={[styles.buttonText, styles.whiteText]}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.buttonZero, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText, styles.zero]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.black]}>
          <Text style={[styles.buttonText, styles.whiteText]}>.</Text>
          </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]}>
          <Text style={[styles.buttonText, styles.whiteText]}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonZero: {
    height: 100,
    width: 200,
    borderRadius: 50,
    justifyContent: 'center',
  },
  zero: {
    marginLeft: 40,
  },
  input: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
    width: '87%',
    height: 200,
    marginBottom: 50,
    marginTop: 150,
    marginLeft: 30,
    textAlign: 'right',
    fontSize: 150,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  gray: {
    backgroundColor: '#A6A6A6',
  },
  orange: {
    backgroundColor: '#FF9500',
  },
  black: {
    backgroundColor: '#323232',
  },
  buttonText: {
    fontSize: 60,
  },
  whiteText: {
    color: '#FFFFFF'
  },
  blackText: {
    color: '#000000'
  }
});
