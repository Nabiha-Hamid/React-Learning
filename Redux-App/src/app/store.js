import {configureStore} from '@reduxjs/toolkit' //it is from redux
 import todoSlice from '../features/ToDo/todoSlice'

export const store = configureStore({reducer : todoReducer})//reducer / slicer
 
