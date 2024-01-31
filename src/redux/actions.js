import { ADD_TODO, FILTER_TODO, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATA_SEARCH_TERM } from "./actionTypes";

export const  addTodo =(text) =>({
    type : ADD_TODO,
    payload: {text}
})

export const  toggleTodo =(id) =>({
    type : TOGGLE_TODO,
    payload: {id}
})


export const  removeTodo =(id) =>({
    type : REMOVE_TODO,
    payload: {id}
})


export const  markCompleted =(id) =>({
    type : MARK_COMPLETED,
    payload: {id}
})

export const  markIncomplete =(id) =>({
    type : MARK_INCOMPLETE,
    payload: {id}
})

export const  filterTodos =(filter) =>({
    type : FILTER_TODO,
    payload: {filter}
})

export const  markAllCompleted =() =>({
    type : MARK_ALL_COMPLETED,
  
})

export const  updataSearchTerm =(searchTerm) =>({
    type : UPDATA_SEARCH_TERM,
    payload: {searchTerm}
})




