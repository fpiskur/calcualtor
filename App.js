import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [output, setOutput] = useState('')

  return (
    <>
      <View style={[styles.container, styles.output_container]}><Text style={styles.output_text}>{output}</Text></View>
      <View style={[styles.container, styles.numpad]}>
        <View style={styles.numrow}>
          <Pressable onPress={() => setOutput(1)} style={styles.button}><Text>1</Text></Pressable>
          <Pressable onPress={() => setOutput(2)} style={styles.button}><Text>2</Text></Pressable>
          <Pressable onPress={() => setOutput(3)} style={styles.button}><Text>3</Text></Pressable>
        </View>
        <View style={styles.numrow}>
          <Pressable onPress={() => setOutput(4)} style={styles.button}><Text>4</Text></Pressable>
          <Pressable onPress={() => setOutput(5)} style={styles.button}><Text>5</Text></Pressable>
          <Pressable onPress={() => setOutput(6)} style={styles.button}><Text>6</Text></Pressable>
        </View>
        <View style={styles.numrow}>
          <Pressable onPress={() => setOutput(7)} style={styles.button}><Text>7</Text></Pressable>
          <Pressable onPress={() => setOutput(8)} style={styles.button}><Text>8</Text></Pressable>
          <Pressable onPress={() => setOutput(9)} style={styles.button}><Text>9</Text></Pressable>
        </View>
        <View style={styles.numrow}>
          <Pressable style={styles.button}><Text>#</Text></Pressable>
          <Pressable onPress={() => setOutput(0)} style={styles.button}><Text>0</Text></Pressable>
          <Pressable style={styles.button}><Text>#</Text></Pressable>
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
  output_text: {
    fontSize: 57,
  },
  output_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderColor: 'blue',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingBottom: 20,
  },
  numrow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightblue',
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderStyle: 'solid',
  }
});
