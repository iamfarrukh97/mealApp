import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from './src/navigation/MealsNavigation';
import MyDrawerNavigation from './src/navigation/MealsNavigation';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyDrawerNavigation />
      </Provider>
    </NavigationContainer>
  );
}
