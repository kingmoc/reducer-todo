import shortid from "shortid"

export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const CLEAR = 'CLEAR'

export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: shortid.generate()
        }
    ]
}

export const reducer = (state, action) => {
    
    switch (action.type) {

        case ADD_ITEM: 
        
            const newTask = {
                item: action.payload,
                completed: false,
                id: shortid.generate()
            }
        
            console.log(newTask)
            return {
                ...state,
                todoList: [...state.todoList, newTask]
            }

        case TOGGLE_TASK:
            return {
                ...state,
                todoList: state.todoList.map(task => {
                    if(action.payload === task.id) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }

                    return task
                }) 
            }

        case CLEAR:
            console.log("Got here")
            return {
                ...state,
                todoList: state.todoList.filter(task => !task.completed)
            }
        
        default: 
            return state
    }   
}
