import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Тип для пользователя (пример, уточни по своим данным)
interface User {
  id: number;
  name: string;
  email?: string; // Опционально, если есть
  [key: string]: any; // Для дополнительных полей
}

// Тип состояния
interface AuthState {
  token: string | null;
  user: User | null;
}

// Начальное состояние
const initialState: AuthState = {
  token: null,
  user: null,
};

// Создание слайса
const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

// Экспорт экшенов и редьюсера
export const { setUser, setToken } = authSlice.actions;
export const auth = authSlice.reducer;