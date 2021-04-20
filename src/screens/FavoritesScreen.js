import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  console.log(favMeals.length);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View>
        <Text>No Favorite Meal Found</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
