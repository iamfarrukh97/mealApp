import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from '../components/MealItem';

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetailScreen', {
            mealId: itemData.item.id,
            mealName: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={styles.List}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   screen: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     padding: 15,
  //   },
  List: {
    margin: 10,
  },
});

export default MealList;
