import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    label: '카운터',
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1
    },
    decrement: state => {
      state.count -= 1
    },
    reset: state => {
      state.count = 0
    },
  },
})

export const { increment } = counterSlice.actions
export const { decrement } = counterSlice.actions
export const { reset } = counterSlice.actions
