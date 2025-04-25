import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { themeSlice } from './themeSlice'
import { todoSlice } from './todoSlice'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    todos: todoSlice.reducer,
  },
})
