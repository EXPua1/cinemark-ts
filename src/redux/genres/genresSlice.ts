import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Интерфейс состояния для слайса
interface GenreState {
  selectedGenre: number | null; // или string | null, если id строковый
}

// Начальное состояние
const initialState: GenreState = {
  selectedGenre: null,
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<number>) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setSelectedGenre } = genreSlice.actions;
export default genreSlice.reducer;
