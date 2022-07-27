import React from "react";
import { Text } from 'react-native';
import {
  Inter_400Regular,
  Inter_900Black,
  useFonts
} from '@expo-google-fonts/inter';

export enum FamilyType {
  Regular = 'Regular',
  Bold = 'Bold',
}

interface Props {
  readonly family?: FamilyType;
  readonly children: React.ReactNode;
}

const TextComponent = ({
  family = FamilyType.Regular,
  children
}: Props): React.ReactElement | null => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) return null;

  if (family === FamilyType.Bold) {
    return (
      <Text style={{ fontFamily: 'Inter_900Black' }}>
        {children}
      </Text>
    )
  }

  return (
    <Text style={{ fontFamily: 'Inter_400Regular' }}>
      {children}
    </Text>
  )
}

export default TextComponent;
