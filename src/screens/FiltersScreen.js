import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../assets/constants';
import {useDispatch} from 'react-redux';
import {setFilters} from '../../store/actions/meals';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.lable}</Text>
      <Switch
        trackColor={{true: Colors.accentColor}}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const {navigation} = props;
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const dispatch = useDispatch();

  const saveFilter = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilter);
    dispatch(setFilters(appliedFilter));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Icon
            name="save"
            size={30}
            color="white"
            onPress={() => saveFilter()}
          />
        </HeaderButtons>
      ),
    });
  }, [saveFilter]);
  return (
    <View style={styles.filterScreen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        lable="Gluten-Free"
        state={isGlutenFree}
        onChange={(newValue) => setGlutenFree(newValue)}
      />
      <FilterSwitch
        lable="Lactose-Free"
        state={isLactoseFree}
        onChange={(newValue) => setLactoseFree(newValue)}
      />
      <FilterSwitch
        lable="Vegan"
        state={isVegan}
        onChange={(newValue) => setVegan(newValue)}
      />
      <FilterSwitch
        lable="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setVegetarian(newValue)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  filterScreen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: 20,
  },
});

export default FiltersScreen;
