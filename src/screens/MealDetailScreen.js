import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeaderButton from '../components/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../../store/actions/meals';
const MealDetailScreen = (props) => {
  const navigation = props.navigation;
  const param = props.route.params;
  const mealId = param.mealId;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId),
  );
  const selectMeal = availableMeals.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(mealId));
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Icon
            name={currentMealIsFavorite ? 'ios-star' : 'ios-star-outline'}
            size={30}
            color="white"
            onPress={() => toggleFavoriteHandler()}
          />
        </HeaderButtons>
      ),
    });
  }, [currentMealIsFavorite]);
  return (
    <ScrollView>
      <Image source={{uri: selectMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectMeal.duration}m</Text>
        <Text>{selectMeal.complexity.toUpperCase()}</Text>
        <Text>{selectMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingreditents</Text>
      {selectMeal.ingredients.map((ingredient) => (
        <View style={styles.item} key={ingredient}>
          <Text>{ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectMeal.steps.map((step) => (
        <View style={styles.item} key={step}>
          <Text>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {flexDirection: 'row', padding: 15, justifyContent: 'space-around'},
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
