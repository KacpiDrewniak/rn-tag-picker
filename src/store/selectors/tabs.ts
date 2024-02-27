import {useAppSelector} from '../store.ts';

export const useTab = () => useAppSelector(state => state.tab.tab);
