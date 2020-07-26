import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.submitButton}
        onPress={this.props.onPress}>
        <Text style={styles.submitButtonText}> {this.props.name} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#3465d9',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
  },
});

export default Button;
