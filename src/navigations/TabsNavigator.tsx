import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Các component
import CardAdd from '../components/CardAdd';
import CreateRoom from '../screens/CreateRoom';

import HomeScreen from '../screens/HomeScreen';

import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderService from '../navigations/HeaderNavigator/HeaderService';
import HeaderMessage from '../navigations/HeaderNavigator/HeaderMessage';
import {Colors} from '../assets/Colors';

const Tab = createBottomTabNavigator();
const getIconColor = (focused: Boolean) => ({
  tintColor: focused ? Colors.accent : Colors.silver1,
});

function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/Home.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/Service.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}></Image>
            </View>
          ),
          header: ({navigation}) => <HeaderService navigation={navigation} />,
        }}
      />

      <Tab.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={({navigation}) => ({
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => <CardAdd navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="Message"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/Message.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}></Image>
            </View>
          ),
          header: ({navigation}) => <HeaderMessage navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/Account.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 18,
    right: 16,
    bottom: 8,
    borderRadius: 16,
    height: 56,

    shadowColor: 'black',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    textShadowRadius: 3,
    elevation: 3,
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
  tabIconContainer: {
    position: 'absolute',
    top: 12,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: 'black',
  },
});

export default TabsNavigator;
