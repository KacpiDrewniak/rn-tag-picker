import {useAppSelector} from '../store.ts';

export const useTagsSelector = () => useAppSelector(state => state.tags.tags);
