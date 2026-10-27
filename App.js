import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Button, Text } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);

  const handleNumber = (n) => {
    setDisplay(display === '0' ? String(n) : display + n);
  };

  const handleOp = (o) => {
    setPrev(display);
    setOp(o);
    setDisplay('0');
  };

  const calculate = () => {
    if (!prev || !op) return;
    const a = parseFloat(prev);
    const b = parseFloat(display);
    let res = 0;
    if (op === '+') res = a + b;
    if (op === '-') res = a - b;
    if (op === '*') res = a * b;
    if (op === '/') res = b !== 0 ? a / b : 'Erro';
    setDisplay(String(res));
    setPrev(null);
    setOp(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.display}>
          <Text variant="displayMedium" style={styles.displayText}>{display}</Text>
        </View>
        <View style={styles.row}>
          <Button mode="contained" onPress={() => handleNumber(7)} style={styles.btn}>7</Button>
          <Button mode="contained" onPress={() => handleNumber(8)} style={styles.btn}>8</Button>
          <Button mode="contained" onPress={() => handleNumber(9)} style={styles.btn}>9</Button>
          <Button mode="contained-tonal" onPress={() => handleOp('/')} style={styles.btn}>/</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" onPress={() => handleNumber(4)} style={styles.btn}>4</Button>
          <Button mode="contained" onPress={() => handleNumber(5)} style={styles.btn}>5</Button>
          <Button mode="contained" onPress={() => handleNumber(6)} style={styles.btn}>6</Button>
          <Button mode="contained-tonal" onPress={() => handleOp('*')} style={styles.btn}>*</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" onPress={() => handleNumber(1)} style={styles.btn}>1</Button>
          <Button mode="contained" onPress={() => handleNumber(2)} style={styles.btn}>2</Button>
          <Button mode="contained" onPress={() => handleNumber(3)} style={styles.btn}>3</Button>
          <Button mode="contained-tonal" onPress={() => handleOp('-')} style={styles.btn}>-</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained-tonal" onPress={handleClear} style={styles.btn}>C</Button>
          <Button mode="contained" onPress={() => handleNumber(0)} style={styles.btn}>0</Button>
          <Button mode="contained-tonal" onPress={calculate} style={styles.btn}>=</Button>
          <Button mode="contained-tonal" onPress={() => handleOp('+')} style={styles.btn}>+</Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  display: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-end',
    borderRadius: 8,
  },
  displayText: {
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btn: {
    flex: 1,
    marginHorizontal: 4,
  },
});
