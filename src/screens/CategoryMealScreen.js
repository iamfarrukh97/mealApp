import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MealList from '../components/MealList';
import {CATEGORIES} from '../../data/dummy-data';
import {useSelector} from 'react-redux';

const CategoryMealScreen = (props) => {
  const param = props.route.params;
  const catId = param.category.id;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
