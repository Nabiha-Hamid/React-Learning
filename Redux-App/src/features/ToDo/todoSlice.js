//reducer is called slicer in toolkit 
import {CreatSlice} from '@reduxjs/toolkit'
//nano id generate unique 
//initial state of the store 
const initialState = {
    todos :[{id:1 , text : "Hello world"}] //we can also give inside the object notation 
}

export const todoSlice = CreatSlice({
    name: 'todo' , initialState,
    reducers : {
        addTodo : (state , action) => {
            const todo  = {id:nanoid() , text :action.payload} 
            state.todos.push(todo);
        } ,//we can define function somwehre else 
        
    }, //properties and functions are part of thereducerr 
    removeTodo : (state , action)=>{
        state.todos = state.todos.filer(todo=> id !== action.payload)
    }})
    export const {addTodo , removeTodo } = toddoSlice.actions
    export default todoSlice.reducers //to tell the store
    //filter only returns the true values 
     //we will get state and action 
    //actions -----> we perform something like remove y id --> this id 
    // will come form action 
    //to get the text also action 
    //payload itsel is an object 
    


//will take an object 