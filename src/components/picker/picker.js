import React, {Component} from 'react';
import {StyleSheet, Picker} from 'react-native';
import {Item, View} from 'native-base';

export default class CustomPicker extends Component {
  render() {
    return (
      <Item rounded style={styles.item}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.language}
          onValueChange={this.props.onValueChange}>
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="Pakistan" value="Pakistan" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="China" value="China" />
          <Picker.Item label="America" value="America" />

        </Picker>
      </Item>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
  },
  textStyle: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerStyle: {
    width: '100%',
    color: '#344953',
  },
});