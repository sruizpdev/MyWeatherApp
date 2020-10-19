import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <Text style={styles.Cabecera}>Hola</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Cabecera: {
    color: 'red',
  },
});

export default App;
