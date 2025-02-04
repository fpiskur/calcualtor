import { Pressable, Text, StyleSheet } from 'react-native'

export default function NumPadButton({ children, output, setOutput }) {
  const operators = ["+", "-"]
  let val;
  if (operators.includes(children)) {
    val = " " + children + " "
  } else {
    val = children
  }
  return (
    <Pressable onPress={() => setOutput(output + val)} style={styles.button}>
      <Text style={styles.button_text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
  button_text: {
    fontSize: 27,
    fontWeight: 'bold',
  },
})
