import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CustomPicker, CustomCard} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
const axios = require('axios');

export default class CountriesScreen extends Component {
  constructor() {
    super();
    this.state = {
      contury: '',
      showCard: false,
      data: [
        {
          title: 'Total Cases',
        
          backgroundColor: 'grey',
          border: '#0000FF',
          
        },
        {
          title: 'Recovered Cases',
          backgroundColor: 'green',
          border: '#289228',
        },

        {
          title: 'Deaths',
          backgroundColor: 'red',
          border: '#FF0000',
        },
       
      ],
    };
  }

  handelCity = async (itemValue) => {
    let {data} = this.state;
    this.setState({contury: itemValue});
    if (itemValue) {
      try {
        const getData = await axios.get(
          `https://covid19.mathdro.id/api/countries/${itemValue}`,
        );

        data[0].number = getData.data.confirmed.value;
        data[1].number = getData.data.recovered.value;
        data[2].number = getData.data.deaths.value;
        // data[3].number = getData.data.lastUpdate;
        this.setState({
          data,
          showCard: true,
        });
      } catch (err) {
        alert(err);
      }
    } else {
      this.setState({
        data,
        showCard: false,
      });
    }
  };

  render() {
    let {contury, data, showCard} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headingContainer}>
            {/* <Text style={styles.heading}>Global Condition Of The World</Text> */}
            <CustomPicker language={contury} onValueChange={this.handelCity} />
          </View>

          {showCard ? (
            <>
              {data &&
                data.map((val, i) => {
                  return (
                    <CustomCard
                      data={val}
                      key={i}
                      dataObj={this.state.dataObj}
                    />
                  );
                })}
            </>
          ) : null}
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
    color: '#3465d9',
    fontFamily:'monospace',
  },
});
