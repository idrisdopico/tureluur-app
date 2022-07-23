import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Plaats hier je bestelling</Text>
      <Text>Bestellingen geplaatst na 20:00 worden de volgende dag niet meer mee genomen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
