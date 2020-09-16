import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {videoReducer, fetchSuggestions, fetchCategories} from './videoDuck';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['selectedMovie'],
};

const persistedReducer = persistReducer(persistConfig, videoReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

fetchSuggestions(store.dispatch);
fetchCategories(store.dispatch);
