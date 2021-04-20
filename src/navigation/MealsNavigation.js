import React from 'react';
import {Platform} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../assets/constants';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeaderButton from '../components/HeaderButton';
const Stack = createStackNavigator();
const FavStack = createStackNavigator();
const FilterStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerTitle: 'Meals Category',
          headerStyle: {
            backgroundColor:
              Platform.OS == 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS == 'android' ? 'white' : Colors.primaryColor,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Icon
                name="menu"
                size={30}
                color="white"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryMealScreen"
        component={CategoryMealScreen}
        options={({route}) => ({
          title: route.params.category.title,
          headerStyle: {
            backgroundColor:
              Platform.OS == 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS == 'android' ? 'white' : Colors.primaryColor,
        })}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.mealName,
          headerStyle: {
            backgroundColor:
              Platform.OS == 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS == 'android' ? 'white' : Colors.primaryColor,
        })}
      />
    </Stack.Navigator>
  );
};

const FavMealNavigation = (props) => {
  return (
    <FavStack.Navigator>
      <FavStack.Screen
        name="FavoriteScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          headerStyle: {
            backgroundColor:
              Platform.OS == 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS == 'android' ? 'white' : Colors.primaryColor,
        }}
      />
      <FavStack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.mealName,
          headerStyle: {
            backgroundColor:
              Platform.OS == 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS == 'android' ? 'white' : Colors.primaryColor,
        })}
      />
    </FavStack.Navigator>
  );
};

const FilterlNavigation = (props) => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen
        name="Filter"
        component={FiltersScreen}
        options={{
          title: 'Filters',
          headerStyle: {
            backgroundColor:
              Platform.OS == 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS == 'android' ? 'white' : Colors.primaryColor,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Icon
                name="menu"
                size={30}
                color="white"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          // headerRight: () => (
          //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          //     <Icon
          //       name="save"
          //       size={30}
          //       color="white"
          //       onPress={() => console.log(props)}
          //       // onPress={props.navigation.getParam('save')}
          //     />
          //   </HeaderButtons>
          // ),
        }}
      />
    </FilterStack.Navigator>
  );
};

const TabNavigation = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MealNavigation} />
      <Tab.Screen name="Favorite" component={FavMealNavigation} />
    </Tab.Navigator>
  );
};

const MyDrawerNavigation = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        itemStyle: {marginVertical: 3},
      }}>
      <Drawer.Screen name="Main" component={TabNavigation} />
      <Drawer.Screen name="Filter" component={FilterlNavigation} />
    </Drawer.Navigator>
  );
};

export default MyDrawerNavigation;
