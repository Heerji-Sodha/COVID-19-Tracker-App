import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  // Login,
  // Signup,
  Splash,
  Swiper1,
  Home,
  Notifcation,
  Profile,
  Chart1
} from '../../screens';

import Menu from '../../components/myDrawer/drawer';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// HomeScreen

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
    </Stack.Navigator>
  );
}


function Chart() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chart1"
        options={{headerShown: false}}
        component={Chart1}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Chart" component={Chart} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Swiper1}
        />
       

        <Stack.Screen name="Main" component={MyDrawer} options={{headerLeft: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
