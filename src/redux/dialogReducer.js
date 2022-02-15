const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
   // messages: [
   //    { writersId: 'i', id: 1, message: 'hi' },
   //    { writersId: 'katya', id: 2, message: 'hello' },
   //    { writersId: 'i', id: 3, message: 'how are you' },
   //    { writersId: 'katya', id: 4, message: 'i am good ty, and you?' },
   //    { writersId: 'i', id: 5, message: 'perfect' },
   // ],

   messages: [
      { id: 1, message: 'hi' },
      { id: 2, message: 'hello' },
      { id: 3, message: 'how are you' },
      { id: 4, message: 'i am good ty, and you?' },
      { id: 5, message: 'perfect' },
   ],
   NewMessageText: '',

   dialogs: [
      { id: 1, name: 'dimych', avatarUrl: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
      { id: 2, name: 'katya', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/219/219990.png' },
      { id: 3, name: 'olya', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' },
      { id: 4, name: 'galya', avatarUrl: 'https://www.akbope.kz/images/teachers/19335047335ca475ee4c0e6.png' },
      { id: 5, name: 'buryj', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
   ],

}

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT: {
         return {
            ...state,
            NewMessageText: action.newText
         }
         // stateCopy.NewMessageText = action.newText

      }
      case ADD_MESSAGE: {
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: state.NewMessageText }],
            NewMessageText: ''
         }
         // stateCopy.messages = [...state.messages]
         // stateCopy.messages.push(NewMessage)
         // stateCopy.NewMessageText = ''

      }
      default: return state
   }
}

export const updateNewMessageTextActionCreator = (text) => {
   return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}
export const addMessageActionCreator = () => {

   return { type: ADD_MESSAGE }
}

export default dialogReducer