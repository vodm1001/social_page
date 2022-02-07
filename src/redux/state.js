import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"


// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
// const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
// const ADD_POST = 'ADD-POST'


let store = {
   _state: {
      dialogsPage: {

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
            { id: 2, name: 'katya', avatarUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png' },
            { id: 3, name: 'olya', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' },
            { id: 4, name: 'galya', avatarUrl: 'https://www.akbope.kz/images/teachers/19335047335ca475ee4c0e6.png' },
            { id: 5, name: 'buryj', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
         ],

      },
      profilePage: {
         posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
            { id: 3, message: "It's my last post", likesCount: 100 },
         ],
         newPostText: ''
      },
      sidebar: {
         topFriends: [
            { id: 2, name: 'katya', avatarUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png' },
            { id: 3, name: 'olya', avatarUrl: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' },
            { id: 4, name: 'galya', avatarUrl: 'https://www.akbope.kz/images/teachers/19335047335ca475ee4c0e6.png' },
         ],
      },
   },
   _callSubscriber() {
      console.log('State changed');
   },


   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   // updateNewMessage(text) {
   //    this._state.dialogsPage.NewMessage = text
   //    this._callSubscriber(this._state)
   // },
   // addMessage() {
   //    let NewMessage = {
   //       id: 6,
   //       message: this._state.dialogsPage.NewMessage
   //    }
   //    this._state.dialogsPage.messages.push(NewMessage)
   //    this._state.dialogsPage.NewMessage = ''
   //    this._callSubscriber(this._state)
   // },
   // addNewLetter(newLetter) {
   //    this._state.profilePage.newPostText = newLetter
   //    this._callSubscriber(this._state)
   // },
   // addPost() {
   //    let newPost = {
   //       id: 4,
   //       message: this._state.profilePage.newPostText,
   //       likesCount: 0
   //    }
   //    this._state.profilePage.posts.push(newPost)
   //    this._state.profilePage.newPostText = ''
   //    this._callSubscriber(this._state)

   dispatch(action) {

      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this._state)

      // if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      //    this._state.dialogsPage.NewMessageText = action.newText
      //    this._callSubscriber(this._state)
      // } else if (action.type === 'ADD-MESSAGE') {
      //    let NewMessage = {
      //       id: 6,
      //       message: this._state.dialogsPage.NewMessageText
      //    }
      //    this._state.dialogsPage.messages.push(NewMessage)
      //    this._state.dialogsPage.NewMessageText = ''
      //    this._callSubscriber(this._state)
      // } else if (action.type === 'UPDATE-NEW-POST') { //NEW-LETTER
      //    this._state.profilePage.newPostText = action.newText
      //    this._callSubscriber(this._state)
      // } else if (action.type === 'ADD-POST') {
      //    let newPost = {
      //       id: 4,
      //       message: this._state.profilePage.newPostText,
      //       likesCount: 0
      //    }
      //    this._state.profilePage.posts.push(newPost)
      //    this._state.profilePage.newPostText = ''
      //    this._callSubscriber(this._state)
      // }
   }
}





export default store
window.store = store