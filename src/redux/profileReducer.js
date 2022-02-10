const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 3, message: "It's my last post", likesCount: 100 },
   ],
   newPostText: ''
}


const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 0
         }
         let stateCopy = { ...state }
         stateCopy.posts = [...state.posts]
         stateCopy.posts.push(newPost)
         stateCopy.newPostText = ''
         return stateCopy
      }
      case UPDATE_NEW_POST: {
         let stateCopy = { ...state }
         stateCopy.newPostText = action.newText
         return stateCopy
      }
      default: return state

   }
}

export const addNewLetterActionCreator = (text) => {
   return { type: UPDATE_NEW_POST, newText: text }
}
export const addPostActionCreator = () => {
   return { type: ADD_POST }
}



export default profileReducer