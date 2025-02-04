import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react'

import NumPadButton from './components/NumPadButton'

export default function App() {
  const [output, setOutput] = useState('')

  return (
    <>
      <View style={[styles.container, styles.output_container]}><Text style={styles.output_text}>{output}</Text></View>

      <View style={[styles.container, styles.numpad_container]}>
        <View style={styles.numpad}>
          <View style={styles.numrow}>
            <NumPadButton output={output} setOutput={setOutput}>1</NumPadButton>
            <NumPadButton output={output} setOutput={setOutput}>2</NumPadButton>
            <NumPadButton output={output} setOutput={setOutput}>3</NumPadButton>
          </View>
          <View style={styles.numrow}>
            <NumPadButton output={output} setOutput={setOutput}>4</NumPadButton>
            <NumPadButton output={output} setOutput={setOutput}>5</NumPadButton>
            <NumPadButton output={output} setOutput={setOutput}>6</NumPadButton>
          </View>
          <View style={styles.numrow}>
            <NumPadButton output={output} setOutput={setOutput}>7</NumPadButton>
            <NumPadButton output={output} setOutput={setOutput}>8</NumPadButton>
            <NumPadButton output={output} setOutput={setOutput}>9</NumPadButton>
          </View>
          <View style={styles.numrow}>
            <Pressable style={styles.button}><Text>#</Text></Pressable>
            <NumPadButton output={output} setOutput={setOutput}>0</NumPadButton>
            <Pressable style={styles.button}><Text>#</Text></Pressable>
          </View>
        </View>

        <View style={styles.operators}>
          <Pressable
            onPress={() => setOutput('')}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? 'blue' : 'lightblue',
              },
            ]}
          >
            <Text style={styles.operator_button_text}>C</Text>
          </Pressable>
          <NumPadButton output={output} setOutput={setOutput}>+</NumPadButton>
          <NumPadButton output={output} setOutput={setOutput}>-</NumPadButton>
          <Pressable
            onPress={() => { setOutput(Function("return " + output)()) }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'blue' : 'lightblue',
              },
              styles.button
            ]}
          >
            <Text style={styles.operator_button_text}>=</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  output_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  output_text: {
    fontSize: 57,
  },
  numpad_container: {
    flexDirection: 'row',
  },
  numpad: {
    flex: 3
  },
  numrow: {
    flex: 1,
    flexDirection: 'row',
  },
  operators: {
    flex: 1
  },
  button: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  operator_button_text: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});
