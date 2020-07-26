import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

export default class Swiper1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatable_singup: null,
      animatable_login: null,
    };
  }

  onIndexChanged = (index) => {
    if (index == 2) {
      this.setState({
        animatable_singup: 'bounceInLeft',
        animatable_login: 'bounceInRight',
      });
    } else {
      this.setState({
        animatable_singup: null,
        animatable_login: null,
      });
    }
  };
  render() {
    return (
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activedot} />}
        onIndexChanged={(index) => this.onIndexChanged(index)}>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/244-2445922_washing-hands-symbol-wash-your-hands-label-j6573.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Wash Your Hands</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/Prevention_imageCOV-avoid.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Avoid close contact</Text>

          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/Covid-19-header-image.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Thank You Doctors</Text>


            <View style={styles.container}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={[
                  styles.button,
                  {
                    backgroundColor: '#422057FF',
                    borderWidth: 1,
                    borderRadius: 50,
                    marginTop: 15,
                    marginLeft: 20,
                  },
                ]}>
                <Text
                  style={styles.loginText}
                  onPress={() => {
                    this.props.navigation.navigate('Main');
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Swiper>
    );
  }
}

const { width, height } = Dimensions.get('screen');

const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;

const width_button = width * 0.3;


// *********************** Use Style 
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width_image,
    height: height_image,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  text: {
    color: 'grey',
    textAlign: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#422057FF',
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activedot: {
    backgroundColor: '#422057FF',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  container: {
    flexDirection: 'row',
  },

  button: {
    width: width_button,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    color: '#3465d9',
  },
  loginText: {
    color: 'white',
  },
});
