import React from "react"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
   users: [
      { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU', followed: false, fullName: 'Dmytro', status: 'i am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU', followed: true, fullName: 'Sasha', status: 'i am a cool boy', location: { city: 'lviv', country: 'Ukraine' } },
      { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU', followed: false, fullName: 'Olga', status: 'wanna sleep', location: { city: 'Washington', country: 'USA' } },

   ],
}


const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'FOLLOW': {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })

         }
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })

         }
      }
      case SET_USERS: {
         return { ...state, users: { ...state.users, ...action.users } }
      }
      default: return state

   }
}

// const profileReducer = (state = initialState, action) => {
//    switch (action.type) {
//       case ADD_POST: {
//          let newPost = {
//             id: 4,
//             message: state.newPostText,
//             likesCount: 0
//          }
//          let stateCopy = { ...state }
//          stateCopy.posts = [...state.posts]
//          stateCopy.posts.push(newPost)
//          stateCopy.newPostText = ''
//          return stateCopy
//       }
//       case UPDATE_NEW_POST: {
//          let stateCopy = { ...state }
//          stateCopy.newPostText = action.newText
//          return stateCopy
//       }
//       default: return state

//    }
// }


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer