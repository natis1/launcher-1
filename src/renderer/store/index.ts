import { TagCategory } from '@database/entity/TagCategory';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { mainStateReducer } from './main/reducer';
import { MainState } from './main/types';
import { searchReducer, SearchState } from './search';
import { tagCategoriesReducer } from './tagCategories';

// The top-level state object
export interface ApplicationState {
  router: RouterState;
  search: SearchState;
  tagCategories: TagCategory[];
  main: MainState;
}

// Top-level reducer
export const createRootReducer = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  search: searchReducer,
  tagCategories: tagCategoriesReducer,
  main: mainStateReducer,
});
