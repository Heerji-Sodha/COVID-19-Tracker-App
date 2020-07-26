import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { CustomCard } from '../../components';

const axios = require('axios');

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: 'Total Cases',
          backgroundColor: 'white',
          border: 'red',
        },
        {
          title: 'Recovered Cases',
          backgroundColor: 'green',
          border: 'red',
        },

        {
          title: 'Deaths',
          backgroundColor: 'red',
          border: '#FF0000',
        },
      ],
    };
  }

  async componentDidMount() {
    try {
      let { data } = this.state;
      const getData = await axios.get('https://covid19.mathdro.id/api');
      data[0].number = getData.data.confirmed.value;
      data[1].number = getData.data.deaths.value;
      data[2].number = getData.data.recovered.value;

      this.setState({
        data,
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    let { data } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/coronavirus.png')}
          />
          {data &&
            data.map((val, i) => {
              return (
                <CustomCard data={val} key={i} dataObj={this.state.dataObj} />
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    marginVertical: 20,

  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },

  tinyLogo: {
    width: 200,
    height: 150,
    alignSelf: 'center',

    marginVertical: 30,
  },
});
