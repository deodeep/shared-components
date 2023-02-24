import React, { FunctionComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: Record<string, unknown>;
};

export const CustomButton: FunctionComponent<ButtonProps> = ({ onPress, title, style }) => {
  const platformSpecificStyles = Platform.select({
    ios: styles.iosButton,
    android: styles.androidButton,
    web: styles.webButton
  });

  return (
    <View style={[styles.buttonContainer, style]}>
      {Platform.OS === 'web' ? (
        <button className="button" onClick={onPress}>
          <Text style={[styles.text, platformSpecificStyles]}>{title}</Text>
        </button>
      ) : (
        <TouchableOpacity style={[styles.button, platformSpecificStyles]} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  iosButton: {
    backgroundColor: '#007aff'
  },
  androidButton: {
    backgroundColor: '#2196f3'
  },
  webButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

