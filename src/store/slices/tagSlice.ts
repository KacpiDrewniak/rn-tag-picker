import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Tag} from '../../types';

type tagSliceType = {
  tags: Tag[];
};

const initialState: tagSliceType = {tags: []};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    loadTags: (state, action: PayloadAction<Tag[]>) => {
      state.tags = action.payload;
    },
    setTemporaryToggleTag: (state, action: PayloadAction<string>) => {
      const tag = state.tags.find(t => t.id === action.payload)!;
      if (tag.state === 'temporary') {
        tag.state = undefined;
      } else {
        tag.state = 'temporary';
      }
    },
    saveTags: state => {
      state.tags.forEach(e => {
        if (e.state === 'temporary') {
          e.state = 'saved';
        }
      });
    },
  },
});

export const {loadTags, setTemporaryToggleTag, saveTags} = tagSlice.actions;
