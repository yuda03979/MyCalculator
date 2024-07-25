

import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get("screen");

const Button = ({ onPress, text }) => {
  const buttonStyle = [styles.button];
  const textStyle = [styles.text];

  if (text === "=") {
    buttonStyle.push(styles.equalButton);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: (width / 4) - 15, // Adjust for margin
    height: (width / 4) - 15, // Adjust for margin
    backgroundColor: "#e601cd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: (width / 4 - 10) / 2, // Make it a perfect circle
    margin: 5,
  },
  equalButton: {
    width: (width / 2) - 20, // Adjust for margin
    backgroundColor: "#ff0006",
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Button;