import { RootState } from '../store';

export const getSelectedGenre = (state: RootState): number | null =>
    state.genre.selectedGenre;