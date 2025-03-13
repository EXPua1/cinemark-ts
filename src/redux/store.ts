import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import genresReducer from './genres/genresSlice';
import moviesReducer from './movies/moviesSlice';
import { auth } from './auth/slice';


interface AuthState {
  token: string | null;
  user: { id: number; name: string } | null; 
}

// Тип состояния для genres (из genresSlice)
interface GenresState {
  selectedGenre: number | null;
}

// Тип состояния для movies (из moviesSlice)
interface Movie {
  id: number;
  title: string;
  vote_average: number;
  [key: string]: any; // Для дополнительных полей из API
}

interface Trailer {
  id: string;           
  key: string;
  site: string;
  [key: string]: any;   
}

interface MoviesState {
  films: Movie[];
  weeklyFilms: Movie[];
  weeklyShows: Movie[];
  trailers: Trailer[];
  tvTrailers: Trailer[];
  monthlyFilms: Movie[];
  yearlyFilms: Movie[];
  loading: boolean;
  loadingVideo: boolean;
  error: string | null;
}

// Общий тип состояния
interface RootState {
  user: AuthState;
  genre: GenresState;
  movies: MoviesState;
  
}

// Конфигурация persist с типами
const persistConfig: PersistConfig<AuthState> = {
  key: 'userToken',
  storage,
  whitelist: ['token', 'user'],
};

// Создание стора
export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, auth),
    genre: genresReducer,
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type { RootState };
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);

export default store;