import { StyleSheet, Text, View } from 'react-native';
import { colors } from "./app/theme/colors";
import TextComponent, { FamilyType } from "./app/components/TextComponent";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <TextComponent family={FamilyType.Bold}>
        Dit is een test
      </TextComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
