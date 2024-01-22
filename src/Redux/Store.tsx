import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../Redux/Reducer'

export const store = configureStore({ reducer: todoSlice })