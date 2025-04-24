import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    label: '카운터',
  },
  //   reducers: {},
})

// export default counterSlice.reducer
